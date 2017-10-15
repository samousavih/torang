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
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


export class Gallery extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const styles = theme => ({
      root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
      },
    });
    return (
      <div>
        test
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              Title
          </Typography>
          </Toolbar>
        </AppBar>
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
