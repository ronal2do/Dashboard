import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import LogoMini from './LogoMini';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar" data-background-color="brown" data-active-color="success">
      	<Logo />
      	<LogoMini />
      	<Menu />
      </div>
    );
  }
}

export default (Sidebar);