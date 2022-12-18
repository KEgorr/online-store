import * as data from '../data/store-items.json';
import { Items } from '../view/items';
import { Filters } from '../view/filters';
import { FiletsCategory } from '../types/dataTypes';

export class App {
  private items: Items;
  private filters: Filters;

  constructor() {
    this.items = new Items();
    this.filters = new Filters();
  }

  public start() {
    this.items.drawItems(data.products);
    this.filters.drawFilters(data.products, FiletsCategory.Brand);
    this.filters.drawFilters(data.products, FiletsCategory.Category);
  }
}

export default App;
