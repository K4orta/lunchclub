import React from 'react';
import Button from '../btn';
import {Link} from 'react-router';
export default class IndexView extends React.Component {
  render() {
    return (
      <div className='view-content'>
        <h1>Lunch Club</h1>
        <Link to='/events/add'>
          <Button>+</Button>
        </Link>
      </div>
    );
  }
};
