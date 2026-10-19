# Burney’s — interne oplevernotities

- Centrale bron voor de web-offerte en de tijdens download gegenereerde PDF: `lib/proposals/burneys.json`.
- Webroute: `/voorstel/burneys`. PDF-route: `/voorstel/burneys/pdf`. Beide vallen onder de bestaande Office6-offertebeveiliging; de PDF valideert de sessie ook zelf. Er staat geen onbeveiligde PDF in `public`.
- Bestaande offertecomponenten en stijlen hergebruikt: `proposal-page`, `proposal-button`, FoodFair scope en footer. Aanvullende stijlen zijn lokaal aan Burney’s gebonden.
- De publieke Burney’s-foto’s en het logo komen uit de eerdere uitwerking. Oorspronkelijke URLs staan in `public/voorstel/burneys/assets/provenance.json`; fotografie Kamill Cosemans. SIM-afbeelding uit de bestaande publieke Office6-case.
- Geen inhoud uit vertrouwelijke Hannibal-documenten gepubliceerd. Geen resultaatcijfers toegevoegd.

## Nog vooraf te bevestigen

Er is geen aantoonbare algemene Office6-standaard voor offertegeldigheid of licentietermijnen aangetroffen. De FoodFair-offerte bevat projectspecifieke voorwaarden; die zijn niet overgenomen. Leg geldigheidsduur en toepasselijke gebruiks- en muziekrechten schriftelijk vast voor akkoord/productie. De betaalschijven voor dit voorstel staan hieronder en in de centrale JSON. Stem ook portrettoestemming, definitieve scripts, deelnemers, ruimtes en busplanning af.

## Publicatie

De productiehost is de Netlify-site `socialbrandbe` (`ebdbf466-15c6-44be-b736-b0999b818981`), met `https://office6.be` als domein en `main` van `6ftwardje/socialbrand.be` als productiebranch. Vermeld de site expliciet bij CLI-deploys: een algemene Netlify-omgeving op deze computer kan naar een ander project wijzen.

## Design evidence

Burney’s bouwt voort op de bestaande Office6-offertes: de FoodFair-paletvariabelen voor papier, inkt, warme vlakken en rood, de globale offerteknoppen, de FoodFair-scope en footer, Geist en de fotografische hero met donkere overlay. Bronvergelijking met FoodFair, Jabeja en `app/globals.css`, plus de desktop- en mobiele reviewbeelden in `.impeccable/review`, bevestigen dit hergebruik. De lokale aanvulling maakt zes reels afzonderlijk leesbaar: twee kolommen op desktop, één onder 760 px. De sticky hoofdstukbalk wordt op mobiel horizontaal scrollbaar met een aparte PDF-knop; prijs, aantal en shootdatum blijven in de hero zichtbaar. Dit zijn keuzes voor deze offerte, geen nieuwe globale ontwerpregels. Bestaande systeemstijlen blijven behouden; in deze vergelijking is geen aanvullende, aantoonbare drift vastgesteld.

## Aanvulling: founders, funnel en supplementen

Op verzoek zijn foundersinterviews binnen de basisdraaidag opgenomen als basis voor de zes ads, samen met inhoudelijke afstemming op de bestaande website-intake. De zes verhaallijnen blijven afzonderlijk. Technische website- en intakeaanpassingen zijn uitgesloten.

De supplementtarieven sluiten aan bij eerdere projectoffertes: €300 per extra reel uit bestaand materiaal (Huppa: vier extra socialvideo’s voor €1.200) en €1.350 per extra opnamedag (Huppa/Jabeja). Voor Burney’s is een extra opnamedag afgebakend op maximaal acht uur, inclusief Brugge–Mechelen, met extra montage afzonderlijk. Dit zijn de voor deze offerte gekozen tarieven, geen algemene Office6-voorwaarden. De bedragen staan samen met de scope in de centrale JSON en worden in web en PDF gelijk weergegeven.

## Actuele versie zonder kalenderdatums

De niet-gepubliceerde compacte herwerking is op uitdrukkelijk verzoek volledig verworpen. Uitgangspunt is opnieuw de live versie uit commit `6dabda3`. Offertedatum, shootdatum en kalenderdatums van voorbereiding en eerste montages zijn verwijderd uit de centrale bron, webpagina en PDF. De procesvolgorde, acht uur opname, zes reels, foundersaanpak, funnelafstemming, supplementen en commerciële afspraken blijven behouden. Het offertenummer blijft de bestaande identificatie.

## Kortere tekst en uitklapbare toelichting

De bestaande live opbouw, hero en fotografie zijn behouden. Kortere koppen en samenvattingen staan in `shortCopy`; de oorspronkelijke gegevens zijn ongewijzigd. Standaard zijn zes reelideeën, levering, prijs, uitsluitingen, extra opties en praktische afspraken zichtbaar. Interviewaanpak, funneldetails, de zes volledige concepten, toelichting bij supplementen en bestandsopvolging staan achter native `details`-elementen met zichtbare toetsenbordfocus. De PDF blijft het volledige, datumloze voorstel met alle details.

De hoofdtekst is niet verkleind. Bij 1.440 px breed zijn standaard 747 woorden zichtbaar, bij 390 px 743: circa 45% minder dan de vorige volledige webtekst. Alle oorspronkelijke JSON-velden zijn gelijk aan de gepubliceerde datumloze versie; prijs en scope blijven behouden.

## Groen licht en betaalschijven

De aparte bestandsopvolging-sectie is op verzoek verwijderd. De afsluiting vraagt groen licht, gevolgd door een voorschotofferte en een planningscall. Bij de investering en in de PDF staan twee schijven voor het basispakket: 50% (€1.500 excl. btw) voorschot na akkoord, betaalbaar vóór de voorbereiding; 50% (€1.500 excl. btw) saldo bij oplevering. Goedgekeurde supplementen worden apart gefactureerd. Dit zijn projectspecifieke afspraken, geen algemene Office6-voorwaarden.
