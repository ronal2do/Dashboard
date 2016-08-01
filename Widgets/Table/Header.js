import React from 'react';

class Header extends React.Component {
  render() {
    return (
		<div className="header">
            <h4 className="title">Table with Links</h4>
            <p className="category">Here is a subtitle for this table</p>
        </div>
    );
  }
}

export default (Header);