import React from 'react';

class Footer extends React.Component {
  render() {
    return (
		<div className="card-footer">
            <hr />
            <div className="stats">
                <i className="fa fa-history"></i> Updated 3 minutes ago
            </div>
        </div>
    );
  }
}

export default (Footer);