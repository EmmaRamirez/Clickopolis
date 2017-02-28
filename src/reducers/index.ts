import { combineReducers } from 'redux';

export const foodButton = (state = 0, action) {
  switch (action.type) {
    case 'CLICK_FOOD_BUTTON':
      return action.type;
    default:
      return state;
  }
}

export const appReducers = combineReducers({
  foodButton
});

export default appReducers;
