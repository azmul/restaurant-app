import { put, takeLatest, all, select } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_ERROR,
  FETCH_RESTAURANT,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_ERROR,
} from './constants';

export const getPositionInfo = state => state.landingPage.positionInfo;

function* fetchRestaurants() {
  const position = yield select(getPositionInfo);

  if (!position.lat && !position.lng) return;

  const url = `${process.env.CONFIG.baseUrl}/search?client_id=${
    process.env.CONFIG.clientId
  }&client_secret=${process.env.CONFIG.clientSecret}&v=${
    process.env.CONFIG.V
  }&ll=${position.lat},${position.lng}&radius=1000&query=food`;

  try {
    const response = yield axios.get(url);
    yield put({ type: FETCH_RESTAURANTS_SUCCESS, response });
  } catch (err) {
    yield put({ type: FETCH_RESTAURANTS_ERROR, err });
  }
}

function* fetchRestaurant(data) {
  const url = `${process.env.CONFIG.baseUrl}/${data.data.id}?client_id=${
    process.env.CONFIG.clientId
  }&client_secret=${process.env.CONFIG.clientSecret}&v=${process.env.CONFIG.V}`;

  try {
    const response = yield axios.get(url);
    yield put({ type: FETCH_RESTAURANT_SUCCESS, response });
  } catch (err) {
    yield put({ type: FETCH_RESTAURANT_ERROR, err });
  }
}


function* actionWatcher() {
  yield takeLatest(FETCH_RESTAURANTS, fetchRestaurants);
  yield takeLatest(FETCH_RESTAURANT, fetchRestaurant);
}

// Individual exports for testing
export default function* restaurantsPageSaga() {
  yield all([actionWatcher()]);
}
