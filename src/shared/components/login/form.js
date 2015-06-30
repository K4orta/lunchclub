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
        <div className='fb-login-button' data-max-rows='1' data-size='medium' data-show-faces='false' data-auto-logout-link='false'>Login</div>
      </form>
    );
  }

  _onLogin() {
    console.log('Yep');
  }

};
