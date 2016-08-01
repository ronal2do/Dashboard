import React from 'react';

class LinhaT extends React.Component {
  render() {
    return (
      <div className="row">
				<div className="col-lg-3 col-sm-6">
					<div className="card card-circle-chart" data-background="color" data-color="blue">
						<div className="header text-center">
                            <h5 className="title">Dashboard</h5>
                            <p className="description">Monthly sales target</p>
                        </div>
						<div className="content">
							<div id="chartDashboard" className="chart-circle" data-percent="70">70%<canvas height="160" width="160"></canvas></div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="card card-circle-chart" data-background="color" data-color="green">
						<div className="header text-center">
                            <h5 className="title">Orders</h5>
                            <p className="description">Completed</p>
                        </div>
						<div className="content">
							<div id="chartOrders" className="chart-circle" data-percent="34">34%<canvas height="160" width="160"></canvas></div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="card card-circle-chart" data-background="color" data-color="orange">
						<div className="header text-center">
                            <h5 className="title">New Visitors</h5>
                            <p className="description">Out of total number</p>
                        </div>
						<div className="content">
							<div id="chartNewVisitors" className="chart-circle" data-percent="62">62%<canvas height="160" width="160"></canvas></div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="card card-circle-chart" data-background="color" data-color="brown">
						<div className="header text-center">
                            <h5 className="title">Subscriptions</h5>
                            <p className="description">Monthly newsletter</p>
                        </div>
						<div className="content">
							<div id="chartSubscriptions" className="chart-circle" data-percent="10">10%<canvas height="160" width="160"></canvas></div>
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default (LinhaT);