import { items } from './data';

export function renderItem(id: number): string {
  const item = items.find(item => item.itemId === id);
  if (item) {
    return `
      <h2>Item ID: ${item.itemId}</h2>
      <p>Min Buyout: ${item.minBuyout}</p>
      <p>Market Value: ${item.marketValue}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Num Auctions: ${item.numAuctions}</p>
      <a href="/">Go back</a>
    `;
  } else {
    return '<p>Item not found</p><a href="/">Go back</a>';
  }
}
