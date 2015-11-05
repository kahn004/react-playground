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
	}
	render () {
		const devs = this.state.devs
		return (
			<div>
				<Devs items={devs} />
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)