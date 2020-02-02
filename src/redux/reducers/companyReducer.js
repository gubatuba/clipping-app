import * as types from "../actions/actionTypes";

export default function companyReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COMPANY:
      return [...state, { ...action.company }];

    default:
      return state;
  }
}
