import { Action } from './action';

export const clickFoodButton = (amount):Action<string> => {
  return {
    type: 'CLICK_FOOD_BUTTON',
    amount
  }
}
