import React from 'react';
import {RouteHandler} from 'react-router';
import Layout from './layout';

export default class App extends React.Component {
  render() {
    return (
      <Layout {..this.props}>
        <RouteHandler {...this.props} />
      </Layout>
    );
  }
}
