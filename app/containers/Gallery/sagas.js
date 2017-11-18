import { takeEvery, call, put } from 'redux-saga/effects';
import { FixtureAPI } from '../../utils/fixture/fixtureApi';
import {
  LOAD_IMAGES,
} from './constants';

import {
  imagesLoaded,
  imagesLoadingError,
} from './actions';

export function* getImages() {
  try {
    const getImagesResponse = yield call(FixtureAPI.getImages);
    // const deviceList = yield call(request, url, params);
    // yield put(setServiceResponse(getImagesResponse));
    yield put(imagesLoaded(getImagesResponse.data));
  } catch (err) {
    yield put(imagesLoadingError(err));
  }
}
// Individual exports for testing
export default function* rootSaga() {
  yield takeEvery(LOAD_IMAGES, getImages);
}
