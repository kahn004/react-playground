import React from 'react'

export default class Notes extends React.Component {
	render () {
		return (
			<div>
				{ this.props.username }<br />
				{ this.props.notes }
			</div>
		)
	}
}