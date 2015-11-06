// app/App.js

import uuid from 'node-uuid'
import React from 'react'
import { render } from 'react-dom'

import Devs from './components/Devs'

export default class App extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			devs: [
				{
					id: uuid.v4(),
					name: 'Sam Ahn'
				},
				{
					id: uuid.v4(),
					name: 'Bart Wang'
				},
				{
					id: uuid.v4(),
					name: 'Ayodeji Beckly'
				}
			]
		}

		this.addDev = this.addDev.bind(this)
	}
	render () {
		const devs = this.state.devs
		return (
			<div>
				<button className="add-dev" onClick={this.addDev}>Add developer</button>
				<Devs items={devs} />
			</div>
		)
	}
	addDev () {
		this.setState({
			devs: [...this.state.devs, {id: uuid.v4(), name: 'Click to add a developer'}]
		})
	}
}

render(
	<App />,
	document.getElementById('app')
)