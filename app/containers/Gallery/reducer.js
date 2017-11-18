/*
 *
 * Gallery reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_IMAGES,
  IMAGES_LOADED,
  IMAGES_LOADING_ERROR,
} from './constants';

const initialState = fromJS({
  images: [],
  error: false,
  loading: false,
});

function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_IMAGES:
      return state
        .set('loading', true)
        .set('images', [])
        .set('error', false);
    case IMAGES_LOADED:
      return state
        .set('loading', false)
        .set('images', action.images);
    case IMAGES_LOADING_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default galleryReducer;
