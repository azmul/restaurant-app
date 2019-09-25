import landingPageReducer from '../reducer';

describe('landingPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(landingPageReducer(undefined, {})).toEqual(expectedResult);
  });
});
