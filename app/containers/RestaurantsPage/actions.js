/*
 *
 * RestaurantsPage actions
 *
 */

import { FETCH_RESTAURANTS, FETCH_RESTAURANT, RESTAURANT_ROUTE_INFO } from './constants';

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

export function restaurantRouteInfo(data) {
  return {
    type: RESTAURANT_ROUTE_INFO,
    data,
  };
}