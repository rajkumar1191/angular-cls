import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('Load');
export const loadProductsSuccess = createAction(
  'Load Success',
  props<{ products: any }>()
);
export const addProduct = createAction('Add', props<{ product: any }>());
