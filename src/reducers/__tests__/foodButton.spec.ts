import { foodButton } from '../foodButton';

describe('reducers', () => {

  describe('food button', () => {
    it('should provide the initial state', () => {
      expect(foodButton(undefined, {})).toBe(0);
    });

    it('should handle default action', () => {
      expect(foodButton(1, { type: 'CLICK_FOOD_BUTTON', amount: 1 })).toBe(2);
    });
  });
});
