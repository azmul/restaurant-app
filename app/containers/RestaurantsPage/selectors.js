import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRestaurantsPageDomain = state =>
  state.restaurantsPage || initialState;

const makeSelectRestaurantsPage = () =>
  createSelector(
    selectRestaurantsPageDomain,
    substate => substate,
  );

const makeRestaurants = () =>
  createSelector(
    selectRestaurantsPageDomain,
    subState => subState.restaurants,
  );

const makeRestaurant = () =>
  createSelector(
    selectRestaurantsPageDomain,
    subState => subState.restaurant,
  );

const makeRouteInfo = () =>
  createSelector(
    selectRestaurantsPageDomain,
    subState => subState.routeInfo,
  );

export default makeSelectRestaurantsPage;
export { selectRestaurantsPageDomain, makeRestaurants, makeRestaurant, makeRouteInfo };
