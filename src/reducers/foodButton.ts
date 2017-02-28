export const foodButton = (state = 0, action) {
  switch (action.type) {
    case 'CLICK_FOOD_BUTTON':
      return state + action.type;
    default:
      return state;
  }
}
