import React from 'react';

class Ul extends React.Component {
  render() {
    return (
		<ul className="nav navbar-nav navbar-right">
            <li>
                <a href="#stats" className="dropdown-toggle btn-magnify" data-toggle="dropdown">
                    <i className="ti-panel"></i>
					<p>Stats</p>
                </a>
            </li>
            <li className="dropdown">
                <a href="#notifications" className="dropdown-toggle btn-rotate" data-toggle="dropdown">
                    <i className="ti-bell"></i>
                    <span className="notification">5</span>
					<p>
						Notifications <b className="caret"></b>
					</p>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#not1">Notification 1</a></li>
                    <li><a href="#not2">Notification 2</a></li>
                    <li><a href="#not3">Notification 3</a></li>
                    <li><a href="#not4">Notification 4</a></li>
                    <li><a href="#another">Another notification</a></li>
                </ul>
            </li>
			<li>
                <a href="#settings" className="btn-rotate">
					<i className="ti-settings"></i>
					<p>Settings</p>
                </a>
            </li>
        </ul>
    );
  }
}

export default (Ul);