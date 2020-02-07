import { combineReducers } from "redux";
import companies from "./companyReducer";
import products from "./productReducer";
const rootReducer = combineReducers({
  companies,
  products
});

export default rootReducer;
