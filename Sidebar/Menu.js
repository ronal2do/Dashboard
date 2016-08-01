import React from 'react';

class Menu extends React.Component {
  render() {
    return (
    		<div className="sidebar-wrapper">
				<div className="user">
	                <div className="photo">
	                    <img src="../../assets/img/faces/face-2.jpg" />
	                </div>
	                <div className="info">
	                    <a data-toggle="collapse" href="#collapseExample" className="collapsed">
	                        Chet Faker
	                        <b className="caret"></b>
	                    </a>
	                    <div className="collapse" id="collapseExample">
	                        <ul className="nav">
	                            <li><a href="#profile">My Profile</a></li>
	                            <li><a href="#edit">Edit Profile</a></li>
	                            <li><a href="#settings">Settings</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	            <ul className="nav">
					<li>
	                    <a data-toggle="collapse" href="#dashboardOverview">
	                        <i className="ti-panel"></i>
	                        <p>Dashboard
                                <b className="caret"></b>
                            </p>
	                    </a>
                        <div className="collapse" id="dashboardOverview">
							<ul className="nav">
								<li><a href="../dashboard/overview.html">Overview</a></li>
								<li><a href="../dashboard/stats.html">Stats</a></li>
							</ul>
						</div>
	                </li>
					<li>
	                    <a data-toggle="collapse" href="#componentsExamples">
	                        <i className="ti-package"></i>
	                        <p>Components
	                           <b className="caret"></b>
	                        </p>
	                    </a>
	                    <div className="collapse in" id="componentsExamples">
	                        <ul className="nav">
	                            <li><a href="buttons.html">Buttons</a></li>
	                            <li><a href="grid.html">Grid System</a></li>
	                            <li><a href="panels.html">Panels</a></li>
	                            <li><a href="sweet-alert.html">Sweet Alert</a></li>
	                            <li className="active"><a href="notifications.html">Notifications</a></li>
	                            <li><a href="icons.html">Icons</a></li>
	                            <li><a href="typography.html">Typography</a></li>
	                        </ul>
	                    </div>
	                </li>
					<li>
						<a data-toggle="collapse" href="#formsExamples">
	                        <i className="ti-clipboard"></i>
	                        <p>
								Forms
	                           <b className="caret"></b>
	                        </p>
	                    </a>
	                    <div className="collapse" id="formsExamples">
	                        <ul className="nav">
								<li><a href="../forms/regular.html">Regular forms</a></li>
								<li><a href="../forms/extended.html">Extended forms</a></li>
								<li><a href="../forms/validation.html">Validation Forms</a></li>
	                            <li><a href="../forms/wizard.html">Wizard</a></li>
	                        </ul>
	                    </div>
	                </li>
					<li>
						<a data-toggle="collapse" href="#tablesExamples">
	                        <i className="ti-view-list-alt"></i>
	                        <p>
								Table list
	                           <b className="caret"></b>
	                        </p>
	                    </a>
	                    <div className="collapse" id="tablesExamples">
	                        <ul className="nav">
								<li><a href="../tables/regular.html">Regular Tables</a></li>
								<li><a href="../tables/extended.html">Extended Tables</a></li>
								<li><a href="../tables/datatable.html">Data Tables</a></li>
	                        </ul>
	                    </div>
	                </li>
					<li>
						<a data-toggle="collapse" href="#mapsExamples">
	                        <i className="ti-map"></i>
	                        <p>
								Maps
	                           <b className="caret"></b>
	                        </p>
	                    </a>
	                    <div className="collapse" id="mapsExamples">
	                        <ul className="nav">
								<li><a href="../maps/google.html">Google Maps</a></li>
								<li><a href="../maps/vector.html">Vector maps</a></li>
								<li><a href="../maps/fullscreen.html">Full Screen Map</a></li>
	                        </ul>
	                    </div>
	                </li>
					<li>
	                    <a href="../charts.html">
	                        <i className="ti-bar-chart-alt"></i>
	                        <p>Charts</p>
	                    </a>
	                </li>
					<li>
	                    <a href="../calendar.html">
	                        <i className="ti-calendar"></i>
	                        <p>Calendar</p>
	                    </a>
	                </li>
					<li>
						<a data-toggle="collapse" href="#pagesExamples">
	                        <i className="ti-gift"></i>
	                        <p>
								Pages
	                           <b className="caret"></b>
	                        </p>
	                    </a>
	                    <div className="collapse" id="pagesExamples">
	                        <ul className="nav">
								<li><a href="../pages/timeline.html">Timeline Page</a></li>
								<li><a href="../pages/user.html">User Page</a></li>
								<li><a href="../pages/login.html">Login Page</a></li>
								<li><a href="../pages/register.html">Register Page</a></li>
								<li><a href="../pages/lock.html">Lock Screen Page</a></li>
	                        </ul>
	                    </div>
	                </li>
	            </ul>
	    	</div>
    );
  }
}

export default (Menu);