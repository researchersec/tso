import { initRouter } from './router';
import { items } from './data';

export function renderHome(): string {
  const itemList = items.map((item: { itemId: number }) => `
    <div class="list-group">
      <a href="/item/${item.itemId}" class="list-group-item list-group-item-action">
        Item ID: ${item.itemId}
      </a>
    </div>
  `).join('');
  return `
    <h2>Items</h2>
    ${itemList}
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content') as HTMLDivElement;
  content.innerHTML = renderHome();
  initRouter();
});
