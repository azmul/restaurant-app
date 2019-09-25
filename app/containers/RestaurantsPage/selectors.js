import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRestaurantsPageDomain = state =>
  state.restaurantsPage || initialState;

const makeSelectRestaurantsPage = () =>
  createSelector(
    selectRestaurantsPageDomain,
    substate => substate,
  );

export default makeSelectRestaurantsPage;
export { selectRestaurantsPageDomain };
