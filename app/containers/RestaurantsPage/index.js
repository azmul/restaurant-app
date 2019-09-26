/**
 *
 * RestaurantsPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Detail from 'components/Detail/Loadable';
import Marker from 'components/Marker/Loadable';
import Search from 'components/Search/Loadable';
import { fetchRestaurants } from './actions';
import { makeRestaurants, makeRestaurant, makeRouteInfo } from './selectors';
import { makePositionInfo, makeUserAddress } from '../LandingPage/selectors';
import reducer from './reducer';
import saga from './saga';

import './style.css';

export function RestaurantsPage(props) {
  useInjectReducer({ key: 'restaurantsPage', reducer });
  useInjectSaga({ key: 'restaurantsPage', saga });

  const { 
    restaurants, 
    positionInfo,
    map, 
    restaurant, 
    userAddress, 
    directionDisplay,
    directionService,
    routeInfo,
  } = props;

  const [isWidth, setWidth] = useState(true);

  const closeNav = () => {
    setWidth(false);
  };
  const openNav = () => {
    setWidth(true);
  };

  useEffect(() => {
    if (positionInfo) props.getRestaurants();
  }, [positionInfo]);

  const renderRestaurant = () => {
    if (restaurants.length > 0) {
      return restaurants.map(res => (
        <Marker 
          key={Math.random()} 
          restaurant={res} 
          map={map}
          directionDisplay={directionDisplay}
          directionService={directionService}
          positionInfo={positionInfo}
        />
      ));
    }
    return null;
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>ML | Restaurant</title>
        <meta name="description" content="Description of RestaurantsPage" />
      </Helmet>
      <div>{renderRestaurant()}</div>
      <section className="map-container">
        <button type="button" className="open-btn" onClick={() => openNav()}>
          &gt;
        </button>
        <div className={`side-nav ${isWidth ? 'width - 300' : 'width-0'}`}>
          <button type="button" className="close-btn" onClick={() => closeNav()}>
            &times;
          </button>
          <h4 className="current-address">Your Current Address</h4>
          <i>{userAddress}</i>
          <p className="finding-restaurant">
            Finding Restaurant Number is{' '}
            <b>{restaurants.length > 0 ? restaurants.length : 0} </b> in 1 KM
            <i>
              {restaurants.length > 0
                ? '(Click restaurant icon on map to details)'
                : ''}
            </i>
          </p>
          <p className="or-search">OR</p>
          <Search 
            data={restaurants}
            directionDisplay={directionDisplay}
            directionService={directionService}
            positionInfo={positionInfo}
          />
          <Detail 
            data={restaurant}
            routeInfo={routeInfo}
          />
        </div>
      </section>
    </React.Fragment>
  );
}

RestaurantsPage.propTypes = {
  getRestaurants: PropTypes.func,
  restaurants: PropTypes.array,
  restaurant: PropTypes.object,
  positionInfo: PropTypes.object,
  map: PropTypes.object,
  userAddress: PropTypes.string,
  directionDisplay: PropTypes.object,
  directionService: PropTypes.object,
  routeInfo: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  restaurants: makeRestaurants(),
  restaurant: makeRestaurant(),
  positionInfo: makePositionInfo(),
  userAddress: makeUserAddress(),
  routeInfo: makeRouteInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    getRestaurants: () => dispatch(fetchRestaurants()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RestaurantsPage);;
