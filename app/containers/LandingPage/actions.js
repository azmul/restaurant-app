/*
 *
 * LandingPage actions
 *
 */

import { SET_MAP_COORDINATE, FETCH_ADDRESS } from './constants';

export function setMapCoordinate(data) {
  return {
    type: SET_MAP_COORDINATE,
    data,
  };
}

export function fetchAddress(data) {
  return {
    type: FETCH_ADDRESS,
    data,
  };
}
