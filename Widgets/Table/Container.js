import React from 'react';
import Tbody from './Tbody';
import Thead from './Thead';

class Container extends React.Component {
  render() {
    return (
      <div className="content table-responsive table-full-width">
	      <table className="table">
			    <Thead />
	        <Tbody/>
	      </table>
      </div>
    );
  }
}

export default (Container);