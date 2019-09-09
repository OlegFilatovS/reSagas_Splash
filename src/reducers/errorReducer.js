import {IMAGES} from "../constants";

const errorReducer =  (state = null,action) => {
    switch (action) {
        case IMAGES.LOAD_FAILURE:
            return action.error;
        case IMAGES.LOAD_SUCCESS:
        case IMAGES.LOAD:
            return null;

        default:
            return state;

    }
};


export default errorReducer;
