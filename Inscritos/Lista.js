import React from 'react';

class Lista extends React.Component {
    constructor(props) {
	    super(props)
		    this.state = {
		      dataCount: 0
		    }
	}
	componentWillReceiveProps (props) {
	    this.setState({dataCount: props.data.length})
	}

  	render() {
    const { data } = this.props;
    const dataList = this.props.data.map((repo, key) => {
      return <li key={key}> <strong style={{textTransform:'capitalize'}}>{repo.nome}</strong> - {repo.email} - {repo.estado}, {repo.cidade}</li>
    })
    return (
    	<div>
    		<h2>Lista de inscritos</h2>
    		<ul>{dataList}</ul>
    	</div>    	
    );
  }
}

export default Lista