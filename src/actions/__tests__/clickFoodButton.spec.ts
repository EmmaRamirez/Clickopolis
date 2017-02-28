import { clickFoodButton } from 'actions/clickFoodButton';

describe('clickFoodButton action', () => {
  it('should return an amount', () => {
    const amount = 1;
    const expectedAction = {
      type: 'CLICK_FOOD_BUTTON',
      amount
    };
    expect(clickFoodButton(amount)).toEqual(expectedAction);
  })
})
