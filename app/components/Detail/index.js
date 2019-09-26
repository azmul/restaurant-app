/**
 *
 * Detail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Details(props) {
  const { data } = props;
  const isDetails = Object.keys(props.data).length > 0;
  return (
    <div>
      {isDetails ? (
        <div className="restaurant-details">
          <i>Name</i>
          <p>{data.name}</p>
          <i>Address</i>
          <p>{data.location.formattedAddress[0]}</p>
          <i>Canonical Url</i>
          <p>
            <a href={data.canonicalUrl}>Click Here</a>
          </p>
          <i>Stats TipCount</i>
          <p>{data.stats.tipCount}</p>
          <i>Likes</i>
          <p>{data.likes.count}</p>
          <i>Photos Number</i>
          <p>{data.photos.count}</p>
        </div>
      ) : null}
    </div>
  );
}

Details.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Details;
