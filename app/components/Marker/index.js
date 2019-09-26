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
import { fetchRestaurant, restaurantRouteInfo } from '../../containers/RestaurantsPage/actions';

function Marker(props) {
  const { 
    restaurant, 
    map, 
    getRestaurant,
    directionService,
    directionDisplay,
    getRouteInfo,
    positionInfo,
  } = props;

  const { google } = window;
  const latLng = pick(restaurant.location, 'lat', 'lng');

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
      const request = {
        origin: `${positionInfo.lat},${positionInfo.lng}`,
        destination: `${latLng.lat},${latLng.lng}`,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
      };
      directionService.route(request, (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionDisplay.setDirections(response);
          getRouteInfo(response.routes[0]);
        }
      });
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
  getRestaurant: PropTypes.func.isRequired,
  directionDisplay: PropTypes.object,
  directionService: PropTypes.object,
  getRouteInfo: PropTypes.func.isRequired,
  positionInfo: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    getRestaurant: data => dispatch(fetchRestaurant(data)),
    getRouteInfo: data => dispatch(restaurantRouteInfo(data)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Marker);
