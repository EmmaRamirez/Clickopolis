import { combineReducers } from 'redux';
import { foodTotal } from './foodTotal';
import { prodTotal } from './prodTotal';

export const appReducers = combineReducers({
  foodTotal,
  prodTotal,
});

export default appReducers;
