
import { fromJS } from 'immutable';
import galleryReducer from '../reducer';

describe('galleryReducer', () => {
  it('returns the initial state', () => {
    expect(galleryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
