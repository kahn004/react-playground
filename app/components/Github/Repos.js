import React from 'react'

export default class Repos extends React.Component {
	render () {
		return (
			<div>
				{ this.props.username }<br />
				{ this.props.repos }
			</div>
		)
	}
}

Repos.propTypes = {
	username: React.PropTypes.string.isRequired,
	repos: React.PropTypes.array.isRequired
}
