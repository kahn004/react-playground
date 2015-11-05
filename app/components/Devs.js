// app/components/Devs.js

import React from 'react'

import Dev from './Dev'

export default class Devs extends React.Component {
	render () {
		const devs = this.props.items

		return (
			<ul>
				{ devs.map(this.renderDev) }
			</ul>	
		)
	}
	renderDev (dev) {
		return (
			<li className="dev" key={dev.id}>
				<Dev name={dev.name} />
			</li>
		)
	}
}