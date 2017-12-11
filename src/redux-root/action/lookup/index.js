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
} from '../action-type.js';

export function getLookupPlace(n) {
  return { type: LOOKUP_PLACE, payload: n };
}
export function getLookupExitorentry(n) {
  return { type: LOOKUP_EXITORENTRY, payload: n };
}
export function getLookupAge(n) {
  return { type: LOOKUP_AGE, payload: n };
}


export function getLookupSex(n) {
  return { type: LOOKUP_SEX, payload: n };
}
export function getLookupCashtype(n) {
  return { type: LOOKUP_CASHTYPE, payload: n };
}
export function getLookupCurrencytype(n) {
  return { type: LOOKUP_CURRENCYTYPE, payload: n };
}
export function getLookupCertificatetype(n) {
  return { type: LOOKUP_CERTIFICATETYPE, payload: n };
}

export function getLookupLocal(n) {
  return { type: LOOKUP_LOCAL, payload: n };
}
export function getLookupTeam(n) {
  return { type: LOOKUP_TEAM, payload: n };
}
export function getLookupOcorrencia(n) {
  return { type: LOOKUP_OCORRENCIA, payload: n };
}
export function getLookupState(n) {
  return { type: LOOKUP_STATE, payload: n };
}
