import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Lunch Club!</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}
