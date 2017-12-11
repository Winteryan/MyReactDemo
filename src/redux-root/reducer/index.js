//reducer
import {
  LANGUAGE,
} from '../action/action-type.js';

import { combineReducers } from 'redux';
import system  from './system';
import monthly  from './monthly';
import lookup  from './lookup';


// function num(state = 1, action = {}) {
//   switch (action.type) {
//     case LANGUAGE:
//       return state + action.payload;
//     default:
//       return state;
//   }
// }

const language = (state = 0, action = {})=>{
  switch (action.type) {
    case LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
export default combineReducers({
  system,monthly,lookup,language,
});

