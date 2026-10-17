# Burney’s — interne oplevernotities

- Centrale bron voor de web-offerte en de tijdens download gegenereerde PDF: `lib/proposals/burneys.json`.
- Webroute: `/voorstel/burneys`. PDF-route: `/voorstel/burneys/pdf`. Beide vallen onder de bestaande Office6-offertebeveiliging; de PDF valideert de sessie ook zelf. Er staat geen onbeveiligde PDF in `public`.
- Bestaande offertecomponenten en stijlen hergebruikt: `proposal-page`, `proposal-button`, FoodFair scope en footer. Aanvullende stijlen zijn lokaal aan Burney’s gebonden.
- De publieke Burney’s-foto’s en het logo komen uit de eerdere uitwerking. Oorspronkelijke URLs staan in `public/voorstel/burneys/assets/provenance.json`; fotografie Kamill Cosemans. SIM-afbeelding uit de bestaande publieke Office6-case.
- Geen inhoud uit vertrouwelijke Hannibal-documenten gepubliceerd. Geen resultaatcijfers toegevoegd.

## Nog vooraf te bevestigen

Er is geen aantoonbare algemene Office6-standaard voor betaling, offertegeldigheid of licentietermijnen aangetroffen. De FoodFair-offerte bevat projectspecifieke voorwaarden; die zijn niet overgenomen. Leg betaling, geldigheidsduur en toepasselijke gebruiks- en muziekrechten schriftelijk vast voor akkoord/productie. Stem ook portrettoestemming, definitieve scripts, deelnemers, ruimtes en busplanning af.

## Publicatie

De productiehost is de Netlify-site `socialbrandbe` (`ebdbf466-15c6-44be-b736-b0999b818981`), met `https://office6.be` als domein en `main` van `6ftwardje/socialbrand.be` als productiebranch. Vermeld de site expliciet bij CLI-deploys: een algemene Netlify-omgeving op deze computer kan naar een ander project wijzen.

## Design evidence

Burney’s bouwt voort op de bestaande Office6-offertes: de FoodFair-paletvariabelen voor papier, inkt, warme vlakken en rood, de globale offerteknoppen, de FoodFair-scope en footer, Geist en de fotografische hero met donkere overlay. Bronvergelijking met FoodFair, Jabeja en `app/globals.css`, plus de desktop- en mobiele reviewbeelden in `.impeccable/review`, bevestigen dit hergebruik. De lokale aanvulling maakt zes reels afzonderlijk leesbaar: twee kolommen op desktop, één onder 760 px. De sticky hoofdstukbalk wordt op mobiel horizontaal scrollbaar met een aparte PDF-knop; prijs, aantal en shootdatum blijven in de hero zichtbaar. Dit zijn keuzes voor deze offerte, geen nieuwe globale ontwerpregels. Bestaande systeemstijlen blijven behouden; in deze vergelijking is geen aanvullende, aantoonbare drift vastgesteld.

## Aanvulling: founders, funnel en supplementen

Op verzoek zijn foundersinterviews binnen de basisdraaidag opgenomen als basis voor de zes ads, samen met inhoudelijke afstemming op de bestaande website-intake. De zes verhaallijnen blijven afzonderlijk. Technische website- en intakeaanpassingen zijn uitgesloten.

De supplementtarieven sluiten aan bij eerdere projectoffertes: €300 per extra reel uit bestaand materiaal (Huppa: vier extra socialvideo’s voor €1.200) en €1.350 per extra opnamedag (Huppa/Jabeja). Voor Burney’s is een extra opnamedag afgebakend op maximaal acht uur, inclusief Brugge–Mechelen, met extra montage afzonderlijk. Dit zijn de voor deze offerte gekozen tarieven, geen algemene Office6-voorwaarden. De bedragen staan samen met de scope in de centrale JSON en worden in web en PDF gelijk weergegeven.
