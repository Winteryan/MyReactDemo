import { combineReducers } from 'redux';
import {
  LOOKUP_PLACE,
  LOOKUP_EXITORENTRY,
  LOOKUP_AGE,
  LOOKUP_SEX,
  LOOKUP_CASHTYPE,
  LOOKUP_CURRENCYTYPE,
  LOOKUP_CERTIFICATETYPE,
  LOOKUP_LOCAL,
  LOOKUP_TEAM,
  LOOKUP_OCORRENCIA,
  LOOKUP_STATE,
} from '../../action/action-type.js';

const place = (state = [], action = {}) => {
  switch (action.type) {
    case LOOKUP_PLACE:
      return action.payload;
    default:
      return state;
  }
};

const exitorentrykup = (state = [], action = {}) => {
  switch (action.type) {
    case LOOKUP_EXITORENTRY:
      return action.payload;
    default:
      return state;
  }
};

const age = (state = [], action = {}) => {
  switch (action.type) {
    case LOOKUP_AGE:
      return action.payload;
    default:
      return state;
  }
};
const sex = (state = [], action = {}) => {
  switch (action.type) {
    case LOOKUP_SEX:
      return action.payload;
    default:
      return state;
  }
};

const cashtype = (state = [], action = {}) => {
  switch (action.type) {
    case LOOKUP_CASHTYPE:
      return action.payload;
    default:
      return state;
  }
};
const currencytype = (state = [], action = {}) => {
  switch (action.type) {
    case LOOKUP_CURRENCYTYPE:
      return action.payload;
    default:
      return state;
  }
};
const certificatetype = (state = [], action = {}) => {
  switch (action.type) {
    case LOOKUP_CERTIFICATETYPE:
      return action.payload;
    default:
      return state;
  }
};

const local = (state = [], action = {}) => {
  switch (action.type) {
    case LOOKUP_LOCAL:
      return action.payload;
    default:
      return state;
  }
};
const team = (state = [], action = {}) => {
  switch (action.type) {
    case LOOKUP_TEAM:
      return action.payload;
    default:
      return state;
  }
};
const ocorrencia = (state = [], action = {}) => {
  switch (action.type) {
    case LOOKUP_OCORRENCIA:
      return action.payload;
    default:
      return state;
  }
};
const state = (state = [], action = {}) => {
  switch (action.type) {
    case LOOKUP_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  place, exitorentrykup, age, sex, cashtype,
  currencytype, certificatetype, local,
  team, ocorrencia, state,
});
