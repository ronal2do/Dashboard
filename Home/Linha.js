import React from 'react';

class Linha extends React.Component {
  render() {
    return (
      <div className="row">
       	        <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="content">
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-warning text-center">
                                        <i className="ti-server"></i>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Capacity</p>
                                        105GB
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="card-footer">
							<hr/>
							<div className="stats">
								<i className="ti-reload"></i> Updated now
							</div>
						</div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="content">
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-success text-center">
                                        <i className="ti-wallet"></i>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Revenue</p>
                                        $1,345
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="card-footer">
							<hr/>
							<div className="stats">
								<i className="ti-calendar"></i> Last day
							</div>
						</div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="content">
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-danger text-center">
                                        <i className="ti-pulse"></i>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Errors</p>
                                        23
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="card-footer">
							<hr/>
							<div className="stats">
								<i className="ti-timer"></i> In the last hour
							</div>
						</div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="content">
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="icon-big icon-info text-center">
                                        <i className="ti-twitter-alt"></i>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="numbers">
                                        <p>Followers</p>
                                        +45
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="card-footer">
							<hr/>
							<div className="stats">
								<i className="ti-reload"></i> Updated now
							</div>
						</div>
                    </div>
                </div>
      </div>
    );
  }
}

export default (Linha);