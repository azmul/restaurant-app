/**
 *
 * LandingPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import RestaurantsPage from 'containers/RestaurantsPage/Loadable';
import { setMapCoordinate, fetchAddress } from './actions';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function LandingPage(props) {
  useInjectReducer({ key: 'landingPage', reducer });
  useInjectSaga({ key: 'landingPage', saga });
  const { google } = window;
  const { getMapCoordinate, getAddress } = props;
  const [mapInfo, setMap] = useState(null);
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      async position => {
        const positionInfo = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const map = new google.maps.Map(document.getElementById('map_canvas'), {
          zoom: 14,
          center: positionInfo,
          mapTypeControl: false,
        });
        setMap(map);
        getMapCoordinate(positionInfo);
        getAddress(positionInfo);
      },
      () => {},
    );
  }, []);

  return (
    <React.Fragment>
      <div id="map_canvas" className="map-canvas" />
      <RestaurantsPage map={mapInfo} />
    </React.Fragment>
  );
}

LandingPage.propTypes = {
  getMapCoordinate: PropTypes.func,
  getAddress: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  landingPage: makeSelectLandingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getMapCoordinate: data => dispatch(setMapCoordinate(data)),
    getAddress: data => dispatch(fetchAddress(data)),
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
)(LandingPage);

