import { foodTotal } from '../foodTotal';

describe('reducers', () => {

  describe('food total', () => {
    it('should default to the initial state', () => {
      expect(foodTotal(undefined, {})).toBe(0);
    });

    it('should handle default action', () => {
      expect(foodTotal(1, { type: 'CLICK_FOOD_BUTTON', amount: 1 })).toBe(2);
    });
  });
});
