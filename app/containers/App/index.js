import React, { PropTypes } from 'react';
import { Layout, Menu } from 'antd';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import 'antd/dist/antd.css';
import { makeSelectLocationState } from './selectors';
const { Header, Content, Footer } = Layout;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    onNavigate: PropTypes.func,
  };

  render() {
    const { onNavigate } = this.props;
    return (
      <Layout>
        <Header style={{ background: '#fff', padding: 0, height: 32 }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            style={{ lineHeight: '32px' }}
            onClick={onNavigate}
          >
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="gallery">Gallery</Menu.Item>
            <Menu.Item key="aboutus">About us</Menu.Item>
            <Menu.Item key="contactus">Contact us</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ margin: '10px 16px 0' }}>
          <div style={{ padding: 20, background: '#fff', minHeight: 360 }}>
            {React.Children.toArray(this.props.children)}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Tooranj Bano ©2017
        </Footer>
      </Layout>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  location: makeSelectLocationState(),
});


function mapDispatchToProps(dispatch) {
  return {
    onNavigate: (e) => {
      if (e.key === 'gallery') {
        dispatch(push('/Gallery'));
      } else if (e.key === 'home') {
        dispatch(push('/'));
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
