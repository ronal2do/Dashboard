import React from 'react';
import User from './User';

class Container extends React.Component {
  render() {
    return (
		<div className="content">
           <User />
        </div>    
     );
  }
}

export default (Container);