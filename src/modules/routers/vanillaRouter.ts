import Router = require('vanilla-router');
import { IStorageData } from '../types/dataTypes';
import { CartPage } from '../view/pages/cartPage';
import { ItemPage } from '../view/pages/itemPage';
import { MainPage } from '../view/pages/mainPage';

export class PageRouter extends Router {
  private itemPage = new ItemPage();
  private mainPage = new MainPage();
  private cartPage = new CartPage();

  public routerSetup(data: IStorageData[]) {
    data.forEach((item: IStorageData) => {
      this.add(`products/${item.id}`, () => this.itemPage.drawItemPage(item));
    });
    this.add('/', () => this.mainPage.drawMainPage());
    this.add('cart', () => this.cartPage.drawCartPage());
  }

  public setupPageHooks() {
    const body = document.querySelector('body');
    if (body instanceof Element) {
      body.addEventListener('click', (event: Event) => {
        this.navigateToItemPage(event);
      });
    }
    document.querySelector('.shopping-cart')?.addEventListener('click', () => this.navigateToCartPage());
  }

  public addDOMContentLoadedListener() {
    window.addEventListener('DOMContentLoaded', () => this.check());
  }

  private navigateToItemPage(event: Event) {
    const target = event.target;

    if (target instanceof Element && !target.closest('.add-to-cart-button')) {
      const item = target.closest('.item');
      if (item instanceof HTMLDivElement && item !== null) {
        this.navigateTo(`products/${item.id}`);
      }
    }
  }

  private navigateToCartPage() {
    this.navigateTo('cart');
  }
}
