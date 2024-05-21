import page from 'page';
import { renderItem } from './item';
import { renderHome } from './index';

page('/', renderHome);
page('/item/:id', ctx => {
  const content = document.getElementById('content') as HTMLDivElement;
  content.innerHTML = renderItem(parseInt(ctx.params.id));
});

export function initRouter() {
  page();
}
