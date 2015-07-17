import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <a className='btn'>{this.props.children}</a>
    );
  }
}
