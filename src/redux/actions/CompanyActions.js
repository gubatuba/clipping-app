import * as types from "./actionTypes";
import * as companyApi from "../../api/companyApi";

export function createCompany(company) {
  return { type: types.CREATE_COMPANY, company };
}

export function loadCompaniesSuccess(companies) {
  return { type: types.LOAD_COMPANIES_SUCCESS, companies };
}

export function loadCompanies() {
  return function(dispatch) {
    return companyApi
      .getCompanies()
      .then(companies => {
        dispatch(loadCompaniesSuccess(companies));
      })
      .catch(error => {
        throw error;
      });
  };
}
