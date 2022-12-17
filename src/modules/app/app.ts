import * as data from '../data/store-items.json';
import { Items } from '../view/items';

export class App {
  private items: Items;

  constructor() {
    this.items = new Items();
  }

  public start() {
    this.items.drawItems(data.products);
  }
}

export default App;
