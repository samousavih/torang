/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
  };

  state = {
    menu: {
      anchorEl: null,
      open: false
    }
  };
  handleMenuOpen = (event) => {
    this.setState({ menu: { open: true, anchorEl: event.currentTarget } });
  };

  handleRequestClose = () => {
    this.setState({ menu: { open: false } });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="contrast"
              aria-label="Menu"
              aria-owns={this.state.menu.open ? 'simple-menu' : null}
              aria-haspopup="true"
            >
              <MenuIcon onClick={this.handleMenuOpen} />
            </IconButton>
            <Menu
              id="simple-menu"
              open={this.state.menu.open}
              onRequestClose={this.handleRequestClose}
              anchorEl={this.state.menu.anchorEl}
            >
              <MenuItem onClick={this.handleRequestClose}>Home</MenuItem>
              <MenuItem onClick={this.handleRequestClose}>Gallery</MenuItem>
              <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
            </Menu>
            <Typography type="title" color="inherit" className={classes.flex}>
              Toranj
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
        {React.Children.toArray(this.props.children)}
      </div >
    );
  }
}

export default withStyles(styles)(App);
