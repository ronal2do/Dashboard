import React from 'react';

class User extends React.Component {
  render() {
    return (
		<ul className="list-unstyled team-members">
			<li>
                <div className="row">
                    <div className="col-xs-3">
                        <div className="avatar">
                            <img src="http://demos.creative-tim.com/paper-dashboard-pro/assets/img/faces/face-0.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                        </div>
                    </div>
                    <div className="col-xs-6">
                        DJ Khaled
                        <br/>
                        <span className="text-muted"><small>Offline</small></span>
                    </div>
                    <div className="col-xs-3 text-right">
                        <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope"></i></btn>
                    </div>
                </div>
            </li>
            <li>
                <div className="row">
                    <div className="col-xs-3">
                        <div className="avatar">
                            <img src="http://demos.creative-tim.com/paper-dashboard-pro/assets/img/faces/face-1.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                        </div>
                    </div>
                    <div className="col-xs-6">
                        Creative Tim
                        <br/>
                        <span className="text-success"><small>Available</small></span>
                    </div>
                    <div className="col-xs-3 text-right">
                        <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope"></i></btn>
                    </div>
                </div>
            </li>
            <li>
                <div className="row">
                    <div className="col-xs-3">
                        <div className="avatar">
                            <img src="http://demos.creative-tim.com/paper-dashboard-pro/assets/img/faces/face-3.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                        </div>
                    </div>
                    <div className="col-xs-6">
                        Flume
                        <br/>
                        <span className="text-danger"><small>Busy</small></span>
                    </div>
                    <div className="col-xs-3 text-right">
                        <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope"></i></btn>
                    </div>
                </div>
            </li>
    	</ul>       
    );
  }
}

export default (User);