import React from 'react';
import Header from './Header';
import Minimize from './Minimize';
import Collapse from './Collapse';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
       	<div className="container-fluid">
       		<Minimize />
       		<Header />
       		<Collapse />
       	</div>
      </nav>
    );
  }
}

export default (Navbar);