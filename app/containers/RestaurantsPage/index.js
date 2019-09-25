/**
 *
 * RestaurantsPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRestaurantsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function RestaurantsPage() {
  useInjectReducer({ key: 'restaurantsPage', reducer });
  useInjectSaga({ key: 'restaurantsPage', saga });

  return (
    <div>
      <Helmet>
        <title>RestaurantsPage</title>
        <meta name="description" content="Description of RestaurantsPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

RestaurantsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  restaurantsPage: makeSelectRestaurantsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RestaurantsPage);
