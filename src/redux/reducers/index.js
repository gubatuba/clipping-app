import { combineReducers } from "redux";
import companies from "./companyReducer";

const rootReducer = combineReducers({
  companies
});

export default rootReducer;
