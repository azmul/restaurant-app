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
// import Detail from 'components/Detail/Loadable';
import Marker from 'components/Marker/Loadable';
// import Search from 'components/Search/Loadable';
import { fetchRestaurants } from './actions';
import { makeRestaurants, makeRestaurant } from './selectors';
import { makePositionInfo, makeUserAddress } from '../LandingPage/selectors';
import reducer from './reducer';
import saga from './saga';

import './style.css';

export function RestaurantsPage(props) {
  useInjectReducer({ key: 'restaurantsPage', reducer });
  useInjectSaga({ key: 'restaurantsPage', saga });
  const { restaurants, positionInfo, map, restaurant, userAddress } = props;
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
        <Marker key={Math.random()} restaurant={res} map={map} />
      ));
    }
    return null;
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>ML | Map</title>
        <meta name="description" content="Description of RestaurantsPage" />
      </Helmet>
      <div>{renderRestaurant()}</div>
      <div className="map-container">
        <button type="button" className="openbtn" onClick={() => openNav()}>
          &gt;
        </button>
        <div className={`sidenav ${isWidth ? 'width - 300' : 'width-0'}`}>
          <button type="button" className="closebtn" onClick={() => closeNav()}>
            &times;
          </button>
          <h4 className="current-address">Your Current Address</h4>
          <i>{userAddress}</i>
          <p className="finding-restaurant">
            Finding Resturant Number is{' '}
            <b>{restaurants.length > 0 ? restaurants.length : 0} </b> in 1 KM
            <i>
              {restaurants.length > 0
                ? '(Click restaurant icon on map to details)'
                : ''}
            </i>
          </p>
          <p className="or-search">OR</p>
        </div>
      </div>
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
};

const mapStateToProps = createStructuredSelector({
  restaurants: makeRestaurants(),
  restaurant: makeRestaurant(),
  positionInfo: makePositionInfo(),
  userAddress: makeUserAddress(),
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
