import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./nx-welcome.component.scss'],
  template: `<div class="product-list">
  <div *ngFor="let product of products" class="product-card">
    <img [src]="product.image" alt="{{product.name}}" class="product-image">
    <h2 class="product-name">{{product.name}}</h2>
    <p class="product-price">{{product.price | currency}}</p>
    <button (click)="addToCart(product)" class="add-to-cart-button">Add to Cart</button>
  </div>
</div>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  products = [
    { name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/200' },
    { name: 'Product 2', price: 79.99, image: 'https://via.placeholder.com/200' },
    { name: 'Product 3', price: 59.99, image: 'https://via.placeholder.com/200' },
    // Add more products as needed
  ];

  cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
    console.log('Added to cart: ', product);
  }
}

interface Product {
  name: string;
  price: number;
  image: string;
}
