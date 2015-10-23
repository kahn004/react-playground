import React from 'react'

export default class Userprofile extends React.Component {
	render () {
		return (
			<div>
				{ this.props.username }<br />
				{ this.props.bio.name }
			</div>
		)
	}
}