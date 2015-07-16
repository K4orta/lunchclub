import React from 'react';
import {RouteHandler} from 'react-router';
import { Provider } from 'redux/react';
import redux from '../../utils/flux';

export default class App extends React.Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => {
            return (
              <RouteHandler {...this.props} />
            );
          }
        }
      </Provider>
    );
  }
}
