/*
 *
 * Gallery
 *
 */
import 'react-image-gallery/styles/css/image-gallery.css';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Grid from 'react-virtualized/dist/commonjs/Grid';
import 'react-virtualized/styles.css';
import { makeSelectImages, makeSelectLoading, makeSelectError } from './selectors';
import { loadImages } from './actions';

export class Gallery extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  componentDidMount() {
    const { onLoadImages } = this.props;
    onLoadImages();
  }

  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    const { images } = this.props;
    return (
      <div
        key={key}
        style={style}
      >
        {images[rowIndex][columnIndex]}
      </div>
    );
  }

  render() {
    const { images, loading } = this.props;
    if (images && images.length > 0 && !loading) {
      return (
        <Grid
          cellRenderer={this.cellRenderer}
          columnCount={4}
          columnWidth={100}
          height={300}
          rowCount={1}
          rowHeight={30}
          width={300}
        />
      );
    }
    return (
      <div />
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  onLoadImages: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  images: makeSelectImages(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadImages: () => dispatch(loadImages()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
