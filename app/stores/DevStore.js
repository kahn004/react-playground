// app/stores/DevStore.js

import uuid from 'node-uuid'
import alt from '../libs/alt'
import DevActions from '../actions/DevActions'

class DevStore {
	constructor () {
		this.bindActions(DevActions)

		this.devs = [
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
	create (dev) {
		const devs = this.devs

		dev.id = uuid.v4()

		this.setState({
			devs: devs.concat(dev)
		})
	}
	update ({ devId, name }) {
		let devs = this.devs
		const devIndex = this.findDev(devId)

		if (devIndex < 0) {
			return
		}

		devs[devIndex].name = name

		this.setState({ devs })
	}
	delete (devId) {
		const devs = this.devs
		const devIndex = this.findDev(devId)

		if (devIndex < 0) {
			return
		}

		this.setState({
			devs: devs.slice(0, devIndex).concat(devs.slice(devIndex + 1))
		})
	}
	findDev (id) {
		const devs = this.devs
		const devIndex = devs.findIndex((dev) => dev.id === id)

		if (devIndex < 0) {
			console.log('Failed to find dev', devs, id)
		}

		return devIndex
	}
}

export default alt.createStore(DevStore, 'DevStore')
