/**
 *
 * Tests for LandingPage
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import { LandingPage } from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<LandingPage />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <LandingPage dispatch={dispatch} />
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
        <LandingPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
