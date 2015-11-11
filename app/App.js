// app/App.js

import React from 'react'
import { render } from 'react-dom'

import Devs from './components/Devs'

import DevActions from './actions/DevActions'
import DevStore from './stores/DevStore'

export default class App extends React.Component {
	constructor (props) {
		super(props)

		this.storeChanged = this.storeChanged.bind(this)
		this.state = DevStore.getState()
	}
	componentDidMount () {
		DevStore.listen(this.storeChanged)
	}
	componentWillUnmount () {
		DevStore.unlisten(this.storeChanged)	
	}
	storeChanged (state) {
		this.setState(state)
	}
	render () {
		const devs = this.state.devs
		return (
			<div>
				<Devs items={devs} onEdit={this.editDev} onDelete={this.deleteDev} />
				<button className="add-dev" onClick={this.addDev} style={{margin: 20 + 'px'}}>Add a developer</button>
			</div>
		)
	}
	addDev () {
		DevActions.create({ name: 'Click to name a dev' })
	}
	editDev (devId, name) {
		DevActions.update({ devId, name })
	}
	deleteDev (devId) {
		DevActions.delete(devId)
	}
}

render(
	<App />,
	document.getElementById('app')
)
