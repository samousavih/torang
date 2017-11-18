/*
 *
 * Gallery actions
 *
 */

import {
  LOAD_IMAGES,
  IMAGES_LOADED,
  IMAGES_LOADING_ERROR,
} from './constants';

export function loadImages() {
  return {
    type: LOAD_IMAGES,
  };
}

export function imagesLoaded(images) {
  return {
    type: IMAGES_LOADED,
    images,
  };
}

export function imagesLoadingError(error) {
  return {
    type: IMAGES_LOADING_ERROR,
    error,
  };
}
