import { combineReducers } from "redux";
import companies from "./companyReducer";
import products from "./productReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  companies,
  products,
  apiCallsInProgress
});

export default rootReducer;
