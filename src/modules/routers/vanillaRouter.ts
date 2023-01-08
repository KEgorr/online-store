import Router = require('vanilla-router');
import { IStorageData } from '../types/dataTypes';
import { ItemPage } from '../view/itemPage';
import { MainPage } from '../view/mainPage';

export class PageRouter extends Router {
  private itemPage = new ItemPage();
  private mainPage = new MainPage();

  public routerSetup(data: IStorageData[]) {
    data.forEach((item: IStorageData) => {
      this.add(`products/${item.id}`, () => this.itemPage.drawItemPage(item));
    });
    this.add('/', () => this.mainPage.drawMainPage());
  }

  public setupPageHooks() {
    const body = document.querySelector('body');
    if (body instanceof Element) {
      body.addEventListener('click', (event: Event) => {
        this.navigateToItemPage(event);
      });
    }
  }

  public addDOMContentLoadedListener() {
    window.addEventListener('DOMContentLoaded', () => this.check());
  }

  private navigateToItemPage(event: Event) {
    const target = event.target;

    if (target instanceof Element) {
      const item = target.closest('.item');
      if (item instanceof HTMLDivElement && item !== null) {
        this.navigateTo(`products/${item.id}`);
      }
    }
  }
}
