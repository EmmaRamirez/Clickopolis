import { action } from './action';

export const clickFoodButton = (amount):Action<number> => {
  return {
    type: 'CLICK_FOOD_BUTTON',
    amount
  }
}
