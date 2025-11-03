import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts, addProduct } from '../state/product.actions';
import { selectAllProducts, selectLoading } from '../state/product.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  private store = inject(Store);

  product$ = this.store.select(selectAllProducts);
  loading$ = this.store.select(selectLoading);

  onLoad() {
    this.store.dispatch(loadProducts());
  }

  onAdd() {
    this.store.dispatch(addProduct({ product: { id: 1, name: 'Product' } }));
  }
}
