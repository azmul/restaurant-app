/**
 *
 * Search
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import pick from 'lodash/pick';
import { fetchRestaurant, restaurantRouteInfo } from '../../containers/RestaurantsPage/actions';
import './style.css';

function Search(props) {
  const {
    data,
    getRestaurant,
    directionDisplay,
    directionService,
    positionInfo,
    getRouteInfo,
  } = props;

  const { google } = window;
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestion, setSuggestion] = useState(false);

  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function getSuggestions(val) {
    setValue(val);
    setSuggestion(true);
    const escapedValue = escapeRegexCharacters(val.trim());

    if (escapedValue === '') {
      setSuggestions(data);
      return;
    }
    const regex = new RegExp(`^${escapedValue}`, 'i');
    const restaurants = data.filter(restaurant => regex.test(restaurant.name));
    setSuggestions(restaurants);
  }

  function setSuggestValue(val) {
    const filteredRestaurant = pick(val, 'id', 'name');
    const latLng = pick(val.location, 'lat', 'lng');
    const request = {
      origin: `${positionInfo.lat},${positionInfo.lng}`,
      destination: `${latLng.lat},${latLng.lng}`,
      travelMode: google.maps.DirectionsTravelMode.DRIVING,
    };
    getRestaurant(filteredRestaurant);
    setValue(val.name);
    directionService.route(request, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionDisplay.setDirections(response);
        getRouteInfo(response.routes[0]);
      }
    });
    setEmptySuggestion();
  }

  function setEmptySuggestion() {
    setTimeout(() => {
      setSuggestion(false);
      setSuggestions(data);
    }, 150);
  }

  return (
    <div className="auto-suggest">
      <input
        type="text"
        autoComplete="off"
        value={value}
        name="restaurant"
        onChange={event => getSuggestions(event.target.value)}
        onBlur={() => setEmptySuggestion()}
        onFocus={() => getSuggestions(value)}
        placeholder="Search restaurant for details"
      />
      {isSuggestion ? (
        <ul className="suggestion-list">
          {suggestions.map(item => (
            <li key={Math.random()}>
              <button type="button" onClick={() => setSuggestValue(item)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

Search.propTypes = {
  data: PropTypes.array,
  getRestaurant: PropTypes.func,
  directionDisplay: PropTypes.object,
  directionService: PropTypes.object,
  positionInfo: PropTypes.object,
  getRouteInfo: PropTypes.func,
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
)(Search);

