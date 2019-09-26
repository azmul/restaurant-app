/**
 *
 * Marker
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import pick from 'lodash/pick';
import restaurantIcon from '../../images/restaurant-map-icon.png';
import { fetchRestaurant } from '../../containers/RestaurantsPage/actions';

function Marker(props) {
  const { restaurant, map, getRestaurant } = props;
  const { google } = window;

  const attachEvent = marker => {
    const infowindow = new google.maps.InfoWindow({
      content: restaurant.name,
    });

    marker.addListener('mouseover', () => {
      infowindow.open(map, marker);
    });

    marker.addListener('mouseout', () => {
      infowindow.close();
    });

    marker.addListener('click', async () => {
      getRestaurant(restaurant);
    });
  };

  useEffect(() => {
    const latLng = pick(restaurant.location, 'lat', 'lng');
    const marker = new google.maps.Marker({
      position: latLng,
      icon: restaurantIcon,
      map,
    });
    attachEvent(marker);
  }, []);
  return <></>;
}

Marker.propTypes = {
  restaurant: PropTypes.object.isRequired,
  map: PropTypes.object,
  getRestaurant: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    getRestaurant: data => dispatch(fetchRestaurant(data)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Marker);
