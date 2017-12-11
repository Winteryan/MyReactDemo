import {
  LANGUAGE,
} from './action-type.js';

export function changeLanguage(n) {
  return { type: LANGUAGE, payload: n };
}
