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
} from './constants';

export const initialState = {
  restaurants: [],
  restaurantsError: [],
  restaurant: {},
  restaurantError: {},
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
    }
  });

export default restaurantsPageReducer;
