/**
 *
 * Detail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Detail(props) {
  const { data, routeInfo } = props;
  const isDetails = Object.keys(data).length > 0;
  const isRouteInfo = Object.keys(routeInfo).length > 0;
  return (
    <div>
      {isDetails && isRouteInfo ? (
        <div className="restaurant-details">
          <p>
            <i>Name:</i> {data.name}
          </p>
          <p>
            <i>Distance:</i> {routeInfo.distance.text}
          </p>
          <p>
            <i>Time:</i> {routeInfo.duration.text}
          </p>
          <p>
            <i>Address:</i> {routeInfo.end_address}
          </p>
          <p>
            <i>Canonical Url:</i> <a href={data.canonicalUrl}>Click Here</a>
          </p>
          <p>
            <i>Stats TipCount</i> {data.stats.tipCount}
          </p>
          <p>
            <i>Likes</i> {data.likes.count}
          </p>
          <p>
            <i>Photos Number</i> {data.photos.count}
          </p>
        </div>
      ) : null}
    </div>
  );
}

Detail.propTypes = {
  data: PropTypes.object.isRequired,
  routeInfo: PropTypes.object,
};

export default Detail;
