import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const selectProductState =
  createFeatureSelector<ProductState>('products');
export const selectAllProducts = createSelector(
  selectProductState,
  (s) => s.products
);
export const selectLoading = createSelector(
  selectProductState,
  (s) => s.loading
);
