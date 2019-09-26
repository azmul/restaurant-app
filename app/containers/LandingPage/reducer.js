/*
 *
 * LandingPage reducer
 *
 */
import produce from 'immer';
import {
  SET_MAP_COORDINATE,
  FETCH_ADDRESS_SUCCESS,
  FETCH_ADDRESS_ERROR,
} from './constants';

export const initialState = {
  positionInfo: {},
  userAddress: null,
  userAddressError: {},
};

/* eslint-disable default-case, no-param-reassign */
const landingPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_MAP_COORDINATE:
        draft.positionInfo = action.data;
        break;
      case FETCH_ADDRESS_SUCCESS:
        draft.userAddress = action.response.data.results[1].formatted_address;
        break;
      case FETCH_ADDRESS_ERROR:
        draft.userAddressError = action.err;
        break;
    }
  });

export default landingPageReducer;
