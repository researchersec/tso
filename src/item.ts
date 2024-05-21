import { items } from './data';

export function renderItem(id: number): string {
  const item = items.find(item => item.id === id);
  if (item) {
    return `
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <a href="/">Go back</a>
    `;
  } else {
    return '<p>Item not found</p><a href="/">Go back</a>';
  }
}
