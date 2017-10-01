/*
 *
 * Gallery
 *
 */
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectGallery from './selectors';
import messages from './messages';

export class Gallery extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/',
      },
    ];
    return (
      <div>
        <Helmet
          title="Gallery"
          meta={[
            { name: 'description', content: 'Description of Gallery' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <ImageGallery
          items={images}
          slideInterval={2000}
        />
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
