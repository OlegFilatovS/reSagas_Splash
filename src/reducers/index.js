import errorReducer from "./errorReducer";
import imagesReducers from "./imagesReducer";
import loadingReducer from "./loadingReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers( {
       error: errorReducer,
       images: imagesReducers,
       isLoading: loadingReducer
    });

export default rootReducer;
