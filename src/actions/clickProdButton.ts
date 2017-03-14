import { Action } from './action';

export const clickProdButton = (amount):Action<string> => {
  return {
    type: 'CLICK_PROD_BUTTON',
    amount
  }
}
