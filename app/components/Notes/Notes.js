import React from 'react'
import NotesLists from './NotesLists'

export default class Notes extends React.Component {
	render () {
		return (
			<div>
				<h3>{ this.props.username }</h3>
				<NotesLists notes={ this.props.notes } />
			</div>
		)
	}
}

Notes.propTypes = {
	username: React.PropTypes.string.isRequired,
	notes: React.PropTypes.array.isRequired
}
