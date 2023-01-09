import * as data from '../data/store-items.json';
import { PageRouter } from '../routers/vanillaRouter';

export class App {
  public pageRouter: PageRouter;

  constructor() {
    this.pageRouter = new PageRouter({
      mode: 'history',
      page404: () => console.log('page 404'),
    });
  }

  public start() {
    this.pageRouter.routerSetup(data.products);

    this.pageRouter.setupPageHooks();
    this.pageRouter.addUriListener();
    this.pageRouter.addDOMContentLoadedListener();

    document.querySelector('.logo')?.addEventListener('click', () => this.pageRouter.navigateTo('/'));
  }
}

export default App;
