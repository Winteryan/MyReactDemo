import {
  MONTHLY_ILLEGAL_LIST,
} from '../action-type.js';

export function getMonthlyIllegalList(n) {
  return { type: MONTHLY_ILLEGAL_LIST, payload: n };
}
