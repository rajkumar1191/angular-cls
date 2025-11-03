import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { map, mergeMap } from 'rxjs';
import { ProductService } from '../products.service';

@Injectable()
export class ProductEffects {
  private action$ = inject(Actions);
  private productService = inject(ProductService);

  loadProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.productService
          .getProducts()
          .pipe(
            map((products) => ProductActions.loadProductsSuccess({ products }))
          )
      )
    )
  );
}
