import { combineReducers } from 'redux';
import {
  MONTHLY_ILLEGAL_LIST,
} from '../../action/action-type.js';

const list = (state = { }, action = {})=>{
  switch (action.type) {
    case MONTHLY_ILLEGAL_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  list,
});
