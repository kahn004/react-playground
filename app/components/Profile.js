import React from 'react'
import { Router } from 'react-router'

import Userprofile from './Github/Userprofile'
import Repos from './Github/Repos'
import Notes from './Notes/Notes'

export default class Profile extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			notes: ['note1', 'note2'],
			bio: { name: 'Sam' },
			repos: [1, 2, 3]
		}
	}
	render () {
		var username = this.props.params.username
		return (
			<div className="row">
				<div className="col-md-4">
					<Userprofile username={ username } bio={ this.state.bio } />
				</div>
				<div className="col-md-4">
					<Repos username={ username } repos={ this.state.repos } />
				</div>
				<div className="col-md-4">
					<Notes username={ username } notes={ this.state.notes }  />
				</div>
			</div>
		)
	}
}
