// app/App.js

import uuid from 'node-uuid'
import React from 'react'
import { render } from 'react-dom'
import 'array.prototype.findindex'

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
		this.editDev = this.editDev.bind(this)
		this.findDev = this.findDev.bind(this)
		this.deleteDev = this.deleteDev.bind(this)
	}
	render () {
		const devs = this.state.devs
		return (
			<div>
				<button className="add-dev" onClick={this.addDev}>Add developer</button>
				<Devs items={devs} onEdit={this.editDev} onDelete={this.deleteDev} />
			</div>
		)
	}
	addDev () {
		this.setState({
			devs: [...this.state.devs, {id: uuid.v4(), name: 'Click to add a developer'}]
		})
	}
	editDev (devId, name) {
		let devs = this.state.devs
		const devIndex = this.findDev(devId)
		
		if (devIndex < 0) {
			return
		}

		devs[devIndex].name = name

		this.setState({ devs })
	}
	deleteDev (devId) {
		const devs = this.state.devs
		const devIndex = this.findDev(devId)

		if (devIndex < 0) {
			return
		}

		this.setState({
			devs: devs.slice(0, devIndex).concat(devs.slice(devIndex + 1))
		})
	}
	findDev (devId) {
		const devs = this.state.devs
		const devIndex = devs.findIndex((dev) => dev.id === devId)

		if (devIndex < 0) {
			console.log('Failed to find note', devs, devId)
		}

		return devIndex
	}
}

render(
	<App />,
	document.getElementById('app')
)