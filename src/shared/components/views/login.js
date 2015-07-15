import React from 'react';
import qs from 'querystring';
import {bindActionCreators} from 'redux';
import {connect} from 'redux/react';
import * as UserActions from '../../actions/user-actions';
import AddUser from '../add-user-btn';

@connect(state => {
  return {
    users: state.users
  }
})
export default class LoginView extends React.Component {
  render() {
    let URLProps = {
      'access_type': 'online',
      'client_id': 1462304104083689,
      'redirect_uri': 'http://localhost:8001/auth',
      'response_type': 'code',
      'scope': 'public_profile+email',
      'state': 'state'
    };
    let encodedProps = qs.stringify(URLProps);
    let uri = `https://www.facebook.com/dialog/oauth?${encodedProps}`;

    let {users, dispatch} = this.props;
    return (
      <div className='view-content'>
        <h1>Login</h1>
        <a href={uri} className='btn' >Login Facebook</a>
        <AddUser users={users} {...bindActionCreators(UserActions, dispatch)} />
      </div>
    );
  }
};
