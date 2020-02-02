import * as types from "./actionTypes";

export function createCompany(company) {
  return { type: types.CREATE_COMPANY, company };
}
