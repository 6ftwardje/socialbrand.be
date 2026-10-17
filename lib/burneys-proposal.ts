import data from "./proposals/burneys.json";

export const burneysProposal = data;
const euro = new Intl.NumberFormat("nl-BE", {
  style: "currency", currency: data.currency, maximumFractionDigits: 0,
});
export const formatBurneysPrice = (amount: number) => euro.format(amount);
export const burneysPrice = formatBurneysPrice(data.totalExVat);
export const burneysContactUrl = `mailto:${data.contacts.email}?subject=${encodeURIComponent(`Bespreek de offerte ${data.client} · ${data.quoteNumber}`)}`;
