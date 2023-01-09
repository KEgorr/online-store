import * as data from '../data/store-items.json';
import LocalStorage from '../localStorage/localStorage';
import { PageRouter } from '../routers/vanillaRouter';
import { IStorageData } from '../types/dataTypes';

export class App {
  public pageRouter: PageRouter;
  public localStorage: LocalStorage;

  constructor() {
    this.pageRouter = new PageRouter({
      mode: 'history',
      page404: () => this.error404(),
    });
    this.localStorage = new LocalStorage();
  }

  public start() {
    this.pageRouter.routerSetup(data.products);

    this.pageRouter.setupPageHooks();
    this.pageRouter.addUriListener();
    this.pageRouter.addDOMContentLoadedListener();

    document.querySelector('.logo')?.addEventListener('click', () => this.pageRouter.navigateTo('/'));

    const cost = document.querySelector('.cost-text .cost-text_price');
    const shoppingCart = document.querySelector('.shopping-cart__items');
    if (cost && shoppingCart) {
      let curCost = cost.textContent;
      const localData = this.localStorage.get('items');
      let localItems: IStorageData[] = [];
      if (localData) {
        localItems = JSON.parse(localData) as IStorageData[];
      }

      localItems.forEach((el) => {
        if (curCost) {
          curCost = `${parseInt(curCost) + el.price}`;
        }
      });
      cost.textContent = curCost;
      shoppingCart.textContent = `${localItems.length}`;
    }
  }
  private error404() {
    const errorText = document.createElement('p');
    errorText.classList.add('error-text');
    errorText.textContent = 'ERROR 404 (PAGE NOT FOUND)';

    const main = document.querySelector('.main .wrapper');

    if (main) {
      main.appendChild(errorText);
    }
  }
}

export default App;
