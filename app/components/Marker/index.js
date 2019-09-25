/**
 *
 * Marker
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Marker() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Marker.propTypes = {};

export default memo(Marker);
