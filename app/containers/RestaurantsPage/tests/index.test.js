/**
 *
 * Tests for RestaurantsPage
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import { RestaurantsPage } from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<RestaurantsPage />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <RestaurantsPage dispatch={dispatch} />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <RestaurantsPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
