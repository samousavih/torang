import { createSelector } from 'reselect';

/**
 * Direct selector to the gallery state domain
 */
const selectGalleryDomain = () => (state) => state.get('gallery');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Gallery
 */

const makeSelectImages = () => createSelector(
  selectGalleryDomain,
  (substate) => substate.images
);

const makeSelectLoading = () => createSelector(
  selectGalleryDomain,
  (substate) => substate.loading
);

const makeSelectError = () => createSelector(
  selectGalleryDomain,
  (substate) => substate.error
);

export {
  makeSelectImages,
  makeSelectLoading,
  makeSelectError,
};
