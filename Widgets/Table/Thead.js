import React from 'react';

class Thead extends React.Component {
  render() {
    return (
		<thead>
            <tr>
                <th className="text-center">#</th>
                <th>Name</th>
                <th>Job Position</th>
                <th className="text-right">Salary</th>
                <th className="text-right">Actions</th>
            </tr>
        </thead>
    );
  }
}

export default (Thead);