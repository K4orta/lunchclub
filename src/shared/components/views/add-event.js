import React from 'react';
import Button from '../btn';
import {Link} from 'react-router';
export default class AddEventView extends React.Component {
  render() {
    return (
      <div className='view-content'>
        <h1>Add an event</h1>
        <form>
          <label htmlFor='name'>Yelp URL </label>
          <input type='text' placeholder='Paste a Yelp URL here' className='input-large' id='yelp-url' />
          <label htmlFor='date'>Date </label>
          <input type='text' className='input-large' id='date' />
        </form>
      </div>
    );
  }
};
