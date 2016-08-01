import React from 'react';

class Header extends React.Component {
  render() {
    return (
		<div className="header">
            <h4 className="title">Tarefas</h4>
            <p className="category">Backend development</p>
        </div>
    );
  }
}

export default (Header);