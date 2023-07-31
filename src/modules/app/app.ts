import * as data from '../data/store-items.json';
import LocalStorage from '../localStorage/localStorage';
import { PageRouter } from '../routers/vanillaRouter';
import { IStorageData } from '../types/dataTypes';
import { Cart } from '../view/cart';
import { Cost } from '../view/cost';

export class App {
  public pageRouter: PageRouter;
  public localStorage: LocalStorage;
  private costChanging: Cost;
  private cart: Cart;

  constructor() {
    this.pageRouter = new PageRouter({
      mode: 'history',
      page404: () => this.error404(),
    });
    this.localStorage = new LocalStorage();
    this.costChanging = new Cost();
    this.cart = new Cart();
  }

  public start() {
    this.pageRouter.routerSetup(data.products);

    this.pageRouter.setupPageHooks();
    this.pageRouter.addUriListener();
    this.pageRouter.addDOMContentLoadedListener();

    document.querySelector('.logo')?.addEventListener('click', () => this.pageRouter.navigateTo('/'));

    const localData = this.localStorage.get('items');
    let localItems: IStorageData[] = [];
    if (localData) {
      localItems = JSON.parse(localData) as IStorageData[];
    }

    this.localStorage.set('cartPageNumber', '1');
    this.costChanging.updateItemsInCart(localItems);
    document.querySelector('.body')?.addEventListener('click', (event) => this.costChanging.addItemToCart(event));
    document.querySelector('.body')?.addEventListener('click', (event) => this.costChanging.removeItemFromCart(event));
    document.querySelector('.body')?.addEventListener('change', (event) => this.cart.changeLimitInCart(event));
    document.querySelector('.body')?.addEventListener('click', (event) => this.cart.cartPageIncrease(event));
    document.querySelector('.body')?.addEventListener('click', (event) => this.cart.cartPageDecrease(event));
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
