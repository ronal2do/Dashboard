import React from 'react';
import Table from './Table';


class Content extends React.Component {
  render() {
    return (
      <div className="content">
	    <div className="table-full-width table-tasks">
			<Table />	       
	    </div>
      </div>
    );
  }
}

export default (Content);