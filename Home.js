import React from 'react';
import Linha from './Home/Linha';
import LinhaT from './Home/LinhaT';
import Table from './Widgets/Table';
import Users from './Widgets/Users';
import Tasks from './Widgets/Tasks';


class Home extends React.Component {
  render() {
    return (
        <div className="container-fluid">
			<Linha />
			<LinhaT />
			<Table />
			<div className="row">	
				<div className="col-lg-8 col-md-7">	
					<Tasks />
				</div>
				<div className="col-lg-4 col-md-5">	
					<Users />
				</div>
			</div>
        </div>
    );
  }
}

export default Home;
