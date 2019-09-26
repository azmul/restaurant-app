import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLandingPageDomain = state => state.landingPage || initialState;

const makeSelectLandingPage = () =>
  createSelector(
    selectLandingPageDomain,
    substate => substate,
  );

const makePositionInfo = () =>
  createSelector(
    selectLandingPageDomain,
    substate => substate.positionInfo,
  );

const makeUserAddress = () =>
  createSelector(
    selectLandingPageDomain,
    substate => substate.userAddress,
  );

export default makeSelectLandingPage;
export { selectLandingPageDomain, makePositionInfo, makeUserAddress };
