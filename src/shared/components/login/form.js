import React from 'react';

export default class Index extends React.Component {
  render() {
    return (
      <form action='' method='post' className='login-form'>
        <legend>Login</legend>
        <label>I don't want to hash or store your weak password, so:</label>
        <button>Login with Facebook</button>
      </form>
    );
  }
};
