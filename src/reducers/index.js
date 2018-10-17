import { combineReducers } from "redux";
import homeReducer from "../containers/Home/state/reducer/homeReducer";

const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer;
