import * as types from "./actionTypes";
import * as companyApi from "../../api/companyApi";

export function loadCompaniesSuccess(companies) {
  return { type: types.LOAD_COMPANIES_SUCCESS, companies };
}

export function updateCompanySuccess(company) {
  return { type: types.UPDATE_COMPANY_SUCCESS, company };
}

export function createCompanySuccess(company) {
  return { type: types.CREATE_COMPANY_SUCCESS, company };
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

export function saveCompany(company) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    return companyApi
      .saveCompany(company)
      .then(savedCompany => {
        company.id
          ? dispatch(updateCompanySuccess(savedCompany))
          : dispatch(createCompanySuccess(savedCompany));
      })
      .catch(error => {
        throw error;
      });
  };
}
