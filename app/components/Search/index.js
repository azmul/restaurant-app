/**
 *
 * Search
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Search() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Search.propTypes = {};

export default memo(Search);
