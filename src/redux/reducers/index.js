import { combineReducers } from "redux";
import clients from "./clientReducer";
import companies from "./companyReducer";
import products from "./productReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  clients,
  companies,
  products,
  apiCallsInProgress
});

export default rootReducer;
