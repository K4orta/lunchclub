import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Lunch Club!</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}
