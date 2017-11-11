import React, { PropTypes } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '32px' }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Gallery</Menu.Item>
            <Menu.Item key="3">About us</Menu.Item>
            <Menu.Item key="4">Contact us</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {React.Children.toArray(this.props.children)}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
