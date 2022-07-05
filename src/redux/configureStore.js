import { combineReducers } from "redux";
import TravelReducer from "./TravelReducer";
import PictureReducer from "./PictureReducer";
const rootReducer = combineReducers({
  TravelReducer,
  PictureReducer,
});

export default rootReducer;
