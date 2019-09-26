/*
 *
 * RestaurantsPage actions
 *
 */

import { FETCH_RESTAURANTS, FETCH_RESTAURANT } from './constants';

export function fetchRestaurants() {
  return {
    type: FETCH_RESTAURANTS,
  };
}

export function fetchRestaurant(data) {
  return {
    type: FETCH_RESTAURANT,
    data,
  };
}