import React from 'react';

export default class AddUser extends React.Component {
  render() {
    let users = this.props.users.map((u)=> {
        return <li>{u.name}</li>
    });

    return (
      <div>
        <button className='btn' onClick={this._click.bind(this)} >Add a User</button>
        <input type='text' ref='uname'></input>
        <ul>
          {users}
        </ul>
      </div>
    );
  }
  _click() {
    this.props.addUser(this.refs.uname.getDOMNode().value);
  }
};
