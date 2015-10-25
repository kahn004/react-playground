import React from 'react'
import { Router } from 'react-router'

import Userprofile from './Github/Userprofile'
import Repos from './Github/Repos'
import Notes from './Notes/Notes'

import users from '../api/api'

export default class Profile extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			notes: [],
			bio: {},
			repos: []
		}
	}
	render () {
		var username = this.props.params.username
		return (
			<div className="row">
				<div className="col-sm-4">
					<Userprofile username={ username } bio={ users[username].bio } />
				</div>
				<div className="col-sm-4">
					<Repos username={ username } repos={ users[username].repos } />
				</div>
				<div className="col-sm-4">
					<Notes username={ username } notes={ users[username].notes }  />
				</div>
			</div>
		)
	}
}
