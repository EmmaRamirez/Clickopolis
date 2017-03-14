export const prodTotal = (state = 0, action) => {
  switch (action.type) {
    case 'CLICK_PROD_BUTTON':
      return state + action.amount;
    default:
      return state;
  }
}
