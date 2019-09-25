/**
 *
 * Detail
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Detail() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Detail.propTypes = {};

export default memo(Detail);
