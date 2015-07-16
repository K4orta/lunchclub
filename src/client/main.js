import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';
import {HistoryLocation} from 'react-router';

Router.run(routes, HistoryLocation, (Handler)=> {
  const app = React.createElement(Handler);
  React.render(app, document.getElementById('content'));
});
