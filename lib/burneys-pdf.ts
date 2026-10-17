import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { burneysProposal as p, burneysPrice, burneysContactUrl, formatBurneysPrice } from "./burneys-proposal";

// The PDF and the page read the same proposal. No separately maintained price or scope.
export async function createBurneysPdf() {
  const doc = await PDFDocument.create();
  doc.setTitle(`${p.client} × Office6 | ${p.quoteNumber}`);
  doc.setAuthor("Office6");
  doc.setSubject(p.title);
  doc.setLanguage("nl-BE");
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const ink = rgb(.067, .063, .059), muted = rgb(.36, .33, .31);
  const red = rgb(.863, .075, .149), paper = rgb(.969, .957, .937);
  const line = rgb(.79, .76, .72);
  const width = 595.28, height = 841.89, margin = 46, content = width - margin * 2;
  let page = doc.addPage([width, height]);

  function start() {
    page.drawRectangle({ x: 0, y: 0, width, height, color: paper });
    page.drawRectangle({ x: 0, y: height - 5, width, height: 5, color: red });
    page.drawText("BURNEY’S × OFFICE6", { x: margin, y: height - 35, font: bold, size: 8, color: ink });
    page.drawText(p.quoteNumber, { x: width - margin - regular.widthOfTextAtSize(p.quoteNumber, 8), y: height - 35, font: regular, size: 8, color: muted });
    page.drawText("Vertrouwelijk voorstel", { x: margin, y: 26, font: regular, size: 7.5, color: muted });
  }
  function next() { page = doc.addPage([width, height]); start(); }
  function text(value: string, y: number, options: { x?: number; w?: number; size?: number; weight?: boolean; color?: ReturnType<typeof rgb>; leading?: number } = {}) {
    const { x = margin, w = content, size = 10, weight = false, color = muted, leading = size * 1.5 } = options;
    const font = weight ? bold : regular;
    let cursor = y;
    for (const paragraph of value.split("\n")) {
      let current = "";
      for (const word of paragraph.split(/\s+/)) {
        const candidate = current ? `${current} ${word}` : word;
        if (current && font.widthOfTextAtSize(candidate, size) > w) {
          if (cursor < 48) throw new Error("Burney’s PDF: content exceeds page.");
          page.drawText(current, { x, y: cursor, font, size, color });
          cursor -= leading; current = word;
        } else current = candidate;
      }
      if (cursor < 48) throw new Error("Burney’s PDF: content exceeds page.");
      page.drawText(current, { x, y: cursor, font, size, color });
      cursor -= leading;
    }
    return cursor;
  }
  function rule(y: number, x = margin, w = content) { page.drawLine({ start: { x, y }, end: { x: x + w, y }, thickness: .6, color: line }); }
  function title(value: string, y = 747, size = 32) { return text(value, y, { size, weight: true, color: ink, leading: size * 1.06 }); }
  function bullets(items: string[], y: number, x: number, w: number) {
    for (const item of items) { text("•", y, { x, w: 8, color: red }); y = text(item, y, { x: x + 13, w: w - 13, size: 9, leading: 13 }) - 10; }
    return y;
  }

  start();
  let y = title("Collega’s.\nOok na de meeting.", 745, 40);
  y = text(p.title, y - 20, { size: 14, color: ink, w: 420 }) - 28;
  y = text(burneysPrice, y, { size: 44, weight: true, color: red }) - 2;
  y = text("Vaste pakketprijs · excl. btw", y, { size: 10 }) - 25;
  rule(y); y -= 25;
  const facts = [["Klant", `${p.client} · ${p.contact}`], ["Locatie", p.location], ["Geplande shoot", p.shootDate], ["Oplevering", `${p.reelCount} afzonderlijke reels · ${p.themeCount} B2B-thema’s`], ["Formaat", `${p.format} · ${p.duration}`], ["Bestanden", p.delivery]];
  for (const [label, value] of facts) {
    text(label, y, { w: 115, size: 9, color: muted });
    y = text(value, y, { x: margin + 125, w: content - 125, size: 10, color: ink }) - 13;
  }
  rule(y); y -= 26;
  y = text(p.positioning, y, { size: 10.5 }) - 16;
  y = text(p.scopeNote, y) - 16;
  y = text(p.investmentSummary, y) - 22;
  text("Bespreek de offerte · hello@office6.be", y, { size: 11, weight: true, color: red });
  const firstContactY = y;

  next();
  y = title(p.creativeApproach.title, 747, 30) - 22;
  y = text(p.creativeApproach.text, y, { size: 11, leading: 17 }) - 14;
  y = text(p.creativeApproach.productionNote, y, { size: 10 }) - 26;
  rule(y); y -= 30;
  y = title(p.funnel.title, y, 24) - 18;
  y = text(p.funnel.text, y, { size: 10 }) - 20;
  for (const step of p.funnel.steps) {
    text(step.title, y, { w: 100, size: 13, weight: true, color: red });
    y = text(step.text, y, { x: margin + 110, w: content - 110, size: 10 }) - 20;
  }
  rule(y); y -= 22;
  text(p.funnel.boundary, y, { size: 9 });

  for (const [i, theme] of p.concepts.entries()) {
    next();
    y = title(theme.title, 747, 30);
    y = text(`Thema ${i + 1} · Creatieve voorstellen`, y - 12, { size: 10, color: red }) - 12;
    y = text(p.scriptNote, y, { size: 9 }) - 18;
    for (const reel of theme.reels) {
      rule(y); y -= 25;
      y = text(`Reel ${String(reel.number).padStart(2, "0")} — ${reel.title}`, y, { size: 17, weight: true, color: ink }) - 14;
      y = text("Opening", y, { size: 8, color: muted }) - 3;
      y = text(`“${reel.hook}”`, y, { size: 15, color: ink, leading: 20 }) - 12;
      y = text("Verhaal", y, { size: 8 }) - 3;
      y = text(reel.description, y, { size: 10 }) - 10;
      y = text(`CTA · ${reel.cta}`, y, { size: 10, color: red }) - 10;
      y = text(reel.filename, y, { size: 8 }) - 24;
    }
  }

  next();
  y = title("Investering & scope.");
  y = text(burneysPrice, y - 22, { size: 40, weight: true, color: red }) - 2;
  y = text("Vaste pakketprijs · excl. btw", y, { size: 10 }) - 15;
  y = text(p.investmentSummary, y, { size: 10 }) - 22;
  rule(y); y -= 26;
  const columnGap = 26, column = (content - columnGap) / 2, rightX = margin + column + columnGap;
  text("Inbegrepen", y, { size: 15, color: ink, weight: true });
  text("Niet inbegrepen", y, { x: rightX, size: 15, color: ink, weight: true });
  const leftEnd = bullets(p.included, y - 29, margin, column);
  const rightEnd = bullets(p.excluded, y - 29, rightX, column);
  y = Math.min(leftEnd, rightEnd) - 18;
  rule(y); y -= 24;
  y = text(p.extraWork, y, { color: ink, weight: true }) - 12;
  text(p.scopeNote, y, { size: 9 });

  next();
  y = title(p.supplements.title, 747, 30) - 22;
  y = text(p.supplements.intro, y, { size: 10 }) - 22;
  y = text(`Basispakket: ${burneysPrice} excl. btw`, y, { size: 13, weight: true, color: ink }) - 26;
  for (const item of p.supplements.items) {
    rule(y); y -= 32;
    text(item.title, y, { size: 18, weight: true, color: ink, w: 240 });
    y = text(`+ ${formatBurneysPrice(item.price)}`, y, { x: margin + 320, w: content - 320, size: 25, color: red }) - 2;
    y = text(`${item.unit} · excl. btw`, y, { x: margin + 320, w: content - 320, size: 9 }) - 18;
    y = text(item.description, y, { size: 10, leading: 16 }) - 32;
  }
  rule(y); y -= 24;
  text(p.supplements.note, y, { size: 9 });

  next();
  y = title("Planning & praktische afspraken.", 747, 28) - 24;
  let left = y, right = y;
  for (const item of p.schedule) {
    left = text(item.date, left, { w: column, size: 9, color: red }) - 4;
    left = text(item.title, left, { w: column, size: 14, weight: true, color: ink }) - 3;
    left = text(item.description, left, { w: column, size: 9, leading: 13 }) - 22;
  }
  right = text("Voor een vlotte draaidag", right, { x: rightX, w: column, size: 14, color: ink, weight: true }) - 12;
  right = bullets(p.practical, right, rightX, column);
  y = Math.min(left, right) - 12;
  rule(y); y -= 25;
  y = text(p.proof.title, y, { size: 17, weight: true, color: ink }) - 10;
  y = text(p.proof.text, y, { size: 9, leading: 13 }) - 9;
  const caseLinkY = y;
  y = text(p.proof.url, y, { size: 9, color: red }) - 18;
  y = text(p.proof.measurement, y, { size: 9, leading: 13 }) - 18;
  text("Bespreek de offerte · hello@office6.be", y, { size: 11, weight: true, color: red });

  // Clickable contact and case URLs in PDF readers, without third-party requests.
  const { PDFName, PDFString } = await import("pdf-lib");
  function link(pageIndex: number, uri: string, bottom: number) {
    const annotation = doc.context.obj({ Type: "Annot", Subtype: "Link", Rect: [margin, bottom - 3, width - margin, bottom + 14], Border: [0, 0, 0], A: { Type: "Action", S: PDFName.of("URI"), URI: PDFString.of(uri) } });
    doc.getPage(pageIndex).node.addAnnot(doc.context.register(annotation));
  }
  link(0, burneysContactUrl, firstContactY);
  link(doc.getPageCount() - 1, p.proof.url, caseLinkY);
  link(doc.getPageCount() - 1, burneysContactUrl, y);
  doc.getPages().forEach((pdfPage, index) => {
    pdfPage.drawText(`${index + 1} / ${doc.getPageCount()}`, { x: width - margin - 20, y: 26, font: regular, size: 7.5, color: muted });
  });
  return doc.save();
}
