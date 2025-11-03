import { createReducer, on } from '@ngrx/store';

import * as ProductActions from './product.actions';

export interface ProductState {
  products: any;
  loading: boolean;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({ ...state, loading: true })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(ProductActions.addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  }))
);
