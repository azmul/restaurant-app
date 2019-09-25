import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLandingPageDomain = state => state.landingPage || initialState;

const makeSelectLandingPage = () =>
  createSelector(
    selectLandingPageDomain,
    substate => substate,
  );

export default makeSelectLandingPage;
export { selectLandingPageDomain };
