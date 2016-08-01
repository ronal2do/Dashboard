import React from 'react';

class Minimize extends React.Component {
  render() {
    return (
	    <div className="navbar-minimize">
			<button id="minimizeSidebar" className="btn btn-fill btn-icon"><i className="ti-more-alt"></i></button>
		</div>
    );
  }
}

export default (Minimize);