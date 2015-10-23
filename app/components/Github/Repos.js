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