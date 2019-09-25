// import produce from 'immer';
import restaurantsPageReducer from '../reducer';
// import { someAction } from '../actions';

describe('restaurantsPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(restaurantsPageReducer(undefined, {})).toEqual(expectedResult);
  });
});
