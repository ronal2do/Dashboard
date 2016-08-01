import React from 'react';
import Lista from './Lista.js';


class Dashboard extends React.Component {
   	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

  	render() {
    	return (
           	<section className="container">
		      	<Lista data={this.state.data} />
	      	</section>
    	);
  	}

	componentDidMount() {
	    fetch('/newsletter').then((response) => {
	        return response.json();
	    }).then((data) => {
	        this.setState({data: data});
	    }).catch((err) => {
	        throw new Error(err);
	    });
  	}
}
export default Dashboard;
