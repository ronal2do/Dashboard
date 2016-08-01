import React from 'react';
import Home from './Home';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Navbar from './Navbar';


class Dashboard extends React.Component {
   	constructor(props) {
		super(props);
	}

  	render() {
    	return (
          <div>
            <link rel="stylesheet" href="css/dashboard.css" />
            <link rel="stylesheet" href="css/themify-icons.css" />
            <div className="wrapper">
  				    <Sidebar />
  		      	<div className="main-panel">
                  <Navbar />
                  <div className="content">
                    {this.props.children}
                  </div>
              </div>
            </div>
	      	</div>
    	);
  	}

}
export default Dashboard;
