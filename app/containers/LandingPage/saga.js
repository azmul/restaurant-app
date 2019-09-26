import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_ADDRESS,
  FETCH_ADDRESS_SUCCESS,
  FETCH_ADDRESS_ERROR,
} from './constants';

function* fetchAddress(positionInfo) {
  if (positionInfo) {
    const url = `${process.env.CONFIG.googleApiUrl}latlng=${
      positionInfo.data.lat
    },${positionInfo.data.lng}&key=${process.env.CONFIG.googleApiKey}`;

    try {
      const response = yield axios.get(url);
      yield put({ type: FETCH_ADDRESS_SUCCESS, response });
    } catch (err) {
      yield put({ type: FETCH_ADDRESS_ERROR, err });
    }
  }
}

function* actionWatcher() {
  yield takeLatest(FETCH_ADDRESS, fetchAddress);
}

// Individual exports for testing
export default function* landingPageSaga() {
  yield all([actionWatcher()]);
}