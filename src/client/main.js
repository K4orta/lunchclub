import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';

Router.run(routes, (Handler)=> {
  const app = React.createElement(Handler);
  React.render(app, document.getElementById('content'));
});
