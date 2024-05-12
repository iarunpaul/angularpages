import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

@Component({
  selector: 'app-nx-welcome',
  template: `
    <div class="product-list">
  <div *ngFor="let product of products" class="product">
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }}</p>
    <button (click)="addToCart(product)">Add to cart</button>
  </div>
</div>

<div class="cart">
  <h2>Cart</h2>
  <div *ngFor="let item of cart" class="cart-item">
    <h2>{{ item.name }}</h2>
    <p>{{ item.price }}</p>
    <p>Quantity: {{ item.quantity }}</p>
    <button (click)="removeFromCart(item)">Remove from cart</button>
  </div>
</div>
  `,
  styleUrls: ['./nx-welcome.component.scss']
})
export class NxWelcomeComponent implements OnInit {
  products: Product[] = [];
  cart: CartItem[] = [];

  ngOnInit() {
    this.products = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
    ];
  }

  addToCart(product: Product) {
    const productExistsInCart = this.cart.find(({id}) => id === product.id);
    if (productExistsInCart) {
      productExistsInCart.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(product: CartItem) {
    const productExistsInCart = this.cart.find(({id}) => id === product.id);
    if (productExistsInCart) {
      productExistsInCart.quantity -= 1;
      if (productExistsInCart.quantity <= 0) {
        this.cart = this.cart.filter(({id}) => id !== product.id);
      }
    }
  }
}
