export const foodTotal = (state = 0, action) => {
  switch (action.type) {
    case 'CLICK_FOOD_BUTTON':
      return state + action.amount;
    default:
      return state;
  }
}
