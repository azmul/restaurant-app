/**
 *
 * Asynchronously loads the component for Marker
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
