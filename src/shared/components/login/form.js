import React from 'react';
import FBLoginScripts from './fb-login-script';

export default class Form extends React.Component {
  componentDidMount() {
      console.log('mah');
      // document.querySelector('.fb-login-button').setAttribute('onlogin', this.onLogin.bind(this));
  }
  render() {
    return (
      <form action='' method='post' className='login-form'>
        <FBLoginScripts />
        <div id="fb-root"></div>
        <legend>Login</legend>
        <label>I dont want to hash or store your weak password, so:</label>
        <button>Login</button>
      </form>
    );
  }

  _onLogin() {
    console.log('Yep');
  }

};
