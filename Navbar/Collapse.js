import React from 'react';
import Form from './Form';
import Ul from './Ul';

class Collapse extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse">
       	<Form />
		<Ul />
      </div>
    );
  }
}

export default (Collapse);