import { Cart } from '../cart';

export class CartPage {
  cart: Cart;

  constructor() {
    this.cart = new Cart();
  }

  public drawCartPage() {
    this.cart.drawCart();
  }
}
