import page, { Context } from 'page';
import { renderItem } from './item';
import { renderHome } from './index';

page('/', () => {
  const content = document.getElementById('content') as HTMLDivElement;
  content.innerHTML = renderHome();
});
page('/item/:id', (ctx: Context) => {
  const content = document.getElementById('content') as HTMLDivElement;
  content.innerHTML = renderItem(parseInt(ctx.params.id));
});

export function initRouter() {
  page();
}
