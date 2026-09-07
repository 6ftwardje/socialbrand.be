from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "offerte-huppa-food-fair-recap.pdf"
PUBLIC = ROOT / "public" / "voorstel" / "foodfair" / "offerte-huppa-food-fair-recap.pdf"

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
PUBLIC.parent.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#11100f")
RED = colors.HexColor("#dc1326")
PAPER = colors.HexColor("#f7f4ef")
WARM = colors.HexColor("#e9e4dd")
MUTED = colors.HexColor("#68625c")
LINE = colors.HexColor("#cbc5bc")


class ProposalDoc(BaseDocTemplate):
    pass


def page_background(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
    canvas.setFillColor(RED)
    canvas.rect(0, A4[1] - 4 * mm, A4[0], 4 * mm, fill=1, stroke=0)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 10 * mm, "HUPPA FOOD FAIR x OFFICE6")
    canvas.drawRightString(A4[0] - 18 * mm, 10 * mm, f"{doc.page}")
    canvas.restoreState()


styles = getSampleStyleSheet()
eyebrow = ParagraphStyle(
    "eyebrow", fontName="Helvetica-Bold", fontSize=7, leading=9,
    textColor=RED, spaceAfter=4 * mm, uppercase=True,
)
title = ParagraphStyle(
    "title", fontName="Helvetica-Bold", fontSize=34, leading=31,
    textColor=INK, spaceAfter=7 * mm,
)
h2 = ParagraphStyle(
    "h2", fontName="Helvetica-Bold", fontSize=20, leading=20,
    textColor=INK, spaceAfter=5 * mm,
)
h3 = ParagraphStyle(
    "h3", fontName="Helvetica-Bold", fontSize=11, leading=13,
    textColor=INK, spaceAfter=2 * mm,
)
body = ParagraphStyle(
    "body", fontName="Helvetica", fontSize=8.5, leading=12,
    textColor=MUTED,
)
small = ParagraphStyle(
    "small", fontName="Helvetica", fontSize=7, leading=10,
    textColor=MUTED,
)
price = ParagraphStyle(
    "price", fontName="Helvetica-Bold", fontSize=42, leading=40,
    textColor=RED,
)
right = ParagraphStyle(
    "right", fontName="Helvetica", fontSize=8, leading=11,
    textColor=INK, alignment=TA_RIGHT,
)


def rule_table(rows, widths, header_bg=None):
    table = Table(rows, colWidths=widths, hAlign="LEFT")
    commands = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 3 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
        ("LINEABOVE", (0, 0), (-1, 0), .5, LINE),
        ("LINEBELOW", (0, 0), (-1, -1), .5, LINE),
    ]
    if header_bg:
        commands.extend([
            ("BACKGROUND", (0, 0), (-1, -1), header_bg),
            ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
            ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
        ])
    table.setStyle(TableStyle(commands))
    return table


doc = ProposalDoc(
    str(OUTPUT), pagesize=A4,
    leftMargin=18 * mm, rightMargin=18 * mm,
    topMargin=17 * mm, bottomMargin=18 * mm,
    title="Offerte Huppa Food Fair Recap",
    author="Office6",
)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates([PageTemplate(id="proposal", frames=[frame], onPage=page_background)])

story = []
story.append(Paragraph("VIDEO-OFFERTE 2026", eyebrow))
story.append(Paragraph("Food Fair<br/><font color='#dc1326'>in beweging.</font>", title))
story.append(Paragraph(
    "Een snelle, smaakvolle vertical recap die de energie van Huppa's B2B-foodbeurs vertaalt naar social.",
    ParagraphStyle("intro", parent=body, fontSize=11, leading=15, textColor=INK, spaceAfter=8 * mm),
))

meta = [
    [Paragraph("KLANT", eyebrow), Paragraph("DATUM", eyebrow), Paragraph("LOCATIE", eyebrow)],
    [Paragraph("Huppa", h3), Paragraph("27 september 2026", h3), Paragraph("Planet Group Arena, Gent", h3)],
    [Paragraph("PROJECT", eyebrow), Paragraph("AANWEZIG", eyebrow), Paragraph("OPLEVERING", eyebrow)],
    [Paragraph("Vertical recap video", h3), Paragraph("4 uur", h3), Paragraph("Uiterlijk 4 oktober 2026", h3)],
]
meta_table = Table(meta, colWidths=[doc.width / 3] * 3)
meta_table.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), WARM),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
    ("TOPPADDING", (0, 0), (-1, -1), 3 * mm),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
    ("LINEBELOW", (0, 1), (-1, 1), .5, LINE),
]))
story.append(meta_table)
story.append(Spacer(1, 9 * mm))

overview = Table([
    [Paragraph("DE OPLEVERING", eyebrow), Paragraph("DE INVESTERING", eyebrow)],
    [Paragraph("1 verticale recap", h2), Paragraph("EUR 1.250", price)],
    [Paragraph("30-45 seconden<br/>9:16, social-first<br/>2 gebundelde correctierondes<br/>Muzieklicentie inbegrepen", body),
     Paragraph("excl. btw<br/><br/>Exclusief verplaatsingskosten vanuit Brugge. Die worden afzonderlijk berekend en vooraf bevestigd.", body)],
], colWidths=[doc.width * .48, doc.width * .52])
overview.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (0, -1), 8 * mm),
    ("LEFTPADDING", (1, 0), (1, -1), 8 * mm),
    ("RIGHTPADDING", (1, 0), (1, -1), 0),
    ("LINEBEFORE", (1, 0), (1, -1), .5, LINE),
]))
story.append(overview)
story.append(Spacer(1, 10 * mm))

story.append(Paragraph("WAT WE CAPTEREN", eyebrow))
capture_rows = [
    [Paragraph("01", small), Paragraph("Beleving", h3), Paragraph("Sfeer, drukte en energie van de beurs.", body)],
    [Paragraph("02", small), Paragraph("Food", h3), Paragraph("Producten, tastings, bereidingen en detailshots.", body)],
    [Paragraph("03", small), Paragraph("Connectie", h3), Paragraph("Interactie tussen bezoekers, standhouders en het Huppa-team.", body)],
    [Paragraph("04", small), Paragraph("Merk", h3), Paragraph("Signage en herkenbare eventmomenten als rode draad.", body)],
]
story.append(rule_table(capture_rows, [15 * mm, 40 * mm, doc.width - 55 * mm]))
story.append(Spacer(1, 8 * mm))

supplement = Table([
    [Paragraph("AANBEVOLEN SUPPLEMENT", eyebrow), Paragraph("Prijs op aanvraag", right)],
    [Paragraph("Testimonials in professionele setting", h2), ""],
    [Paragraph("Korte reacties van bezoekers en partners geven Huppa naast sfeer ook geloofwaardigheid, herkenning en herbruikbare social proof voor de volgende editie.", body), ""],
], colWidths=[doc.width * .76, doc.width * .24])
supplement.setStyle(TableStyle([
    ("SPAN", (0, 1), (1, 1)),
    ("SPAN", (0, 2), (1, 2)),
    ("BACKGROUND", (0, 0), (-1, -1), WARM),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 5 * mm),
    ("RIGHTPADDING", (0, 0), (-1, -1), 5 * mm),
    ("TOPPADDING", (0, 0), (-1, -1), 4 * mm),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm),
]))
story.append(supplement)

story.append(PageBreak())
story.append(Paragraph("SCOPE & AFSPRAKEN", eyebrow))
story.append(Paragraph("Duidelijk voor<br/>we beginnen.", title))

included = [
    "Creatieve en inhoudelijke voorbereiding",
    "Compacte shotlist op basis van het draaiboek",
    "Vier uur aanwezigheid op 27 september 2026",
    "Professionele video-opnames op locatie",
    "Een verticale montage van 30-45 seconden in 9:16",
    "Eenvoudige motion graphics in Huppa-stijl",
    "Color grading, sound design en muzieklicentie",
    "Twee gebundelde correctierondes",
    "Oplevering binnen 7 kalenderdagen",
]
excluded = [
    "Verplaatsingskosten vanuit Brugge",
    "Interviews of testimonials in professionele setting",
    "Fotografie en losse fotoselectie",
    "Extra formaten of afzonderlijke social edits",
    "Complexe animatie, 3D of professionele voice-over",
    "Meer dan twee correctierondes",
]

def bullet_list(items, mark):
    return [Paragraph(f"<font color='#dc1326'>{mark}</font>&nbsp;&nbsp;{item}", body) for item in items]

scope = Table([
    [Paragraph("INBEGREPEN", eyebrow), Paragraph("NIET INBEGREPEN", eyebrow)],
    [bullet_list(included, "+"), bullet_list(excluded, "-")],
], colWidths=[doc.width * .57, doc.width * .43])
scope.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (0, -1), 8 * mm),
    ("LEFTPADDING", (1, 0), (1, -1), 8 * mm),
    ("RIGHTPADDING", (1, 0), (1, -1), 0),
    ("LINEBEFORE", (1, 0), (1, -1), .5, LINE),
]))
story.append(scope)
story.append(Spacer(1, 10 * mm))

story.append(Paragraph("NOG NODIG VAN HUPPA", eyebrow))
required_rows = [
    [Paragraph("01", small), Paragraph("Draaiboek", h3), Paragraph("Programma, sleutelmomenten, contactpersoon en exacte call time.", body)],
    [Paragraph("02", small), Paragraph("Brandkit", h3), Paragraph("Logo's, kleuren, lettertypes en relevante grafische richtlijnen.", body)],
    [Paragraph("03", small), Paragraph("Toegang", h3), Paragraph("Accreditatie en vrije toegang tot de afgesproken beurszones.", body)],
]
story.append(rule_table(required_rows, [15 * mm, 40 * mm, doc.width - 55 * mm]))
story.append(Spacer(1, 9 * mm))

story.append(Paragraph("BETALING & GELDIGHEID", eyebrow))
terms = Table([
    [Paragraph("30%", price), Paragraph("70%", price), Paragraph("27.09.26", ParagraphStyle("date", parent=price, fontSize=28, leading=31))],
    [Paragraph("voorschot bij akkoord", body), Paragraph("bij finale oplevering", body), Paragraph("offerte geldig tot de eventdag", body)],
], colWidths=[doc.width / 3] * 3)
terms.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), WARM),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
    ("TOPPADDING", (0, 0), (-1, 0), 4 * mm),
    ("BOTTOMPADDING", (0, 0), (-1, 0), 1 * mm),
    ("TOPPADDING", (0, 1), (-1, 1), 1 * mm),
    ("BOTTOMPADDING", (0, 1), (-1, 1), 4 * mm),
    ("LINEBEFORE", (1, 0), (1, -1), .5, LINE),
    ("LINEBEFORE", (2, 0), (2, -1), .5, LINE),
]))
story.append(terms)
story.append(Spacer(1, 9 * mm))

story.append(KeepTogether([
    Paragraph("VOLGENDE STAP", eyebrow),
    Paragraph("Na akkoord en ontvangst van het voorschot vertalen we het draaiboek naar een compacte shotlist en bevestigen we timing, contactpersoon en toegang.", ParagraphStyle("next", parent=body, fontSize=10, leading=14, textColor=INK)),
    Spacer(1, 4 * mm),
    Paragraph("hello@office6.be  /  office6.be", h3),
]))

doc.build(story)
copyfile(OUTPUT, PUBLIC)
print(OUTPUT)
print(PUBLIC)
