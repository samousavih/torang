/*
 *
 * Gallery
 *
 */
import 'react-image-gallery/styles/css/image-gallery.css';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectGallery from './selectors';

export class Gallery extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        Gallery
      </div>
    );
  }
}

Gallery.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Gallery: makeSelectGallery(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
