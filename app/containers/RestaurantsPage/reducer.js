/*
 *
 * RestaurantsPage reducer
 *
 */
import produce from 'immer';
import {
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_ERROR,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_ERROR,
  RESTAURANT_ROUTE_INFO,
} from './constants';

export const initialState = {
  restaurants: [],
  restaurantsError: [],
  restaurant: {},
  restaurantError: {},
  routeInfo: {},
};

/* eslint-disable default-case, no-param-reassign */
const restaurantsPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_RESTAURANTS_SUCCESS:
        draft.restaurants = action.response.data.response.venues;
        break;
      case FETCH_RESTAURANTS_ERROR:
        draft.restaurantsError = action.err;
        break;
      case FETCH_RESTAURANT_SUCCESS:
        draft.restaurant = action.response.data.response.venue;
        break;
      case FETCH_RESTAURANT_ERROR:
        draft.restaurantError = action.err;
        break;
      case RESTAURANT_ROUTE_INFO:
        draft.routeInfo = action.data.legs[0];
        break;
    }
  });

export default restaurantsPageReducer;
