import {take,takeEvery,put,call} from 'redux-saga/effects'
import {IMAGES} from "../constants";

function* workerSaga() {
    console.log(`i'm called in worker saga,and loading some images`);
}

function* watcherSaga() {
    yield takeEvery(IMAGES.LOAD,workerSaga);
}

export default watcherSaga;
