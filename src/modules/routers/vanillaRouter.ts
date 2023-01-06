import Router = require('vanilla-router');
import { IStorageData } from '../types/dataTypes';
import { ItemPage } from '../view/itemPage';

export class PageRouter extends Router {
  private itemPage = new ItemPage();

  public routerSetup(data: IStorageData[]) {
    data.forEach((item: IStorageData) => {
      this.add(`products/${item.id}`, () => this.itemPage.drawItemPage(item));
    });
  }

  public setupPageHooks() {
    const itemSection = document.querySelector('.items-section');
    if (itemSection instanceof Element) {
      itemSection.addEventListener('click', (event: Event) => {
        this.navigateToItemPage(event);
      });
    }
  }

  navigateToItemPage(event: Event) {
    const target = event.target;

    if (target instanceof Element) {
      const item = target.closest('.item');
      if (item instanceof HTMLDivElement) {
        this.navigateTo(`products/${item.id}`);
      }
    }
  }
}
