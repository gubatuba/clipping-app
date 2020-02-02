import { combineReducers } from "redux";
import empresas from "./empresaReducer";

const rootReducer = combineReducers({
  empresas
});

export default rootReducer;
