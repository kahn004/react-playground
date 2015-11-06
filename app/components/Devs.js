// app/components/Devs.js

import React from 'react'

import Dev from './Dev'

export default class Devs extends React.Component {
	constructor (props) {
		super(props)

		this.renderDev = this.renderDev.bind(this)
	}
	render () {
		const devs = this.props.items

		return (
			<ol style={{marginTop: 20 + 'px'}}>
				{ devs.map(this.renderDev) }
			</ol>	
		)
	}
	renderDev (dev) {
		return (
			<li className="dev" key={dev.id}>
				<Dev
					name={dev.name}
					onEdit={this.props.onEdit.bind(null, dev.id)}
					onDelete={this.props.onDelete.bind(null, dev.id)} />
			</li>
		)
	}
}
