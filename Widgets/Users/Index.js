import React from 'react';
import Header from './Header';
import Container from './Container';

class Users extends React.Component {
  render() {
    return (
      <div className="card">
       	<Header />
       	<Container />
      </div>
    );
  }
}

export default (Users);