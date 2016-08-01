import React from 'react';

class Header extends React.Component {
  render() {
    return (
	    <div className="navbar-header">
	        <button type="button" className="navbar-toggle">
	            <span className="sr-only">Toggle navigation</span>
	            <span className="icon-bar bar1"></span>
	            <span className="icon-bar bar2"></span>
	            <span className="icon-bar bar3"></span>
	        </button>
	        <a className="navbar-brand" href="#Dashboard">
				Overview
			</a>
	    </div>
    );
  }
}

export default (Header);