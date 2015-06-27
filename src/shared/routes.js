import React from 'react';
import {Route, DefaultRoute} from 'react-router';


export default (
  <Route path='/' handler={require('./components/views/app')}>
    <DefaultRoute name='intro' handler={require('./components/views/index')}/>
  </Route>
);
