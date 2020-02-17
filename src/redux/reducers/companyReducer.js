import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function companyReducer(state = initialState.companies, action) {
  switch (action.type) {
    case types.CREATE_COMPANY_SUCCESS:
      return [...state, { ...action.company }];
    case types.UPDATE_COMPANY_SUCCESS:
      return state.map(company =>
        company.id === action.company.id ? action.company : company
      );
    case types.LOAD_COMPANIES_SUCCESS:
      return action.companies;
    default:
      return state;
  }
}
