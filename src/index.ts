import { initRouter } from './router';
import { items } from './data';

export function renderHome() {
  const content = document.getElementById('content') as HTMLDivElement;
  const itemList = items.map(item => `
    <div>
      <a href="/item/${item.id}">${item.name}</a>
    </div>
  `).join('');
  content.innerHTML = `
    <h2>Items</h2>
    ${itemList}
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  initRouter();
});
