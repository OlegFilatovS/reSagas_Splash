import errorReducer from "./errorReducer";
import imagesReducers from "./imagesReducer";
import loadingReducer from "./loadingReducer";
import pageReducer from "./pageReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers( {
       error: errorReducer,
       images: imagesReducers,
       isLoading: loadingReducer,
       nextPage: pageReducer
    });

export default rootReducer;
