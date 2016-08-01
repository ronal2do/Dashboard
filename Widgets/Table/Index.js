import React from 'react';
import Header from './Header';
import Container from './Container';

class Table extends React.Component {
  render() {
    return (
      <div className="card">
       	<Header />
       	<Container />
      </div>
    );
  }
}

export default (Table);