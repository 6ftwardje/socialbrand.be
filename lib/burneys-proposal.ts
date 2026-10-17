import data from "./proposals/burneys.json";

export const burneysProposal = data;
export const burneysPrice = new Intl.NumberFormat("nl-BE", {
  style: "currency", currency: data.currency, maximumFractionDigits: 0,
}).format(data.totalExVat);
export const burneysContactUrl = `mailto:${data.contacts.email}?subject=${encodeURIComponent(`Bespreek de offerte ${data.client} · ${data.quoteNumber}`)}`;
