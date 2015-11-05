// app/components/Pizzerias.js

import React from 'react'
import { Link } from 'react-router'

import SearchForm from './SearchForm'

import locations from '../api/api'

export default class Pizzerias extends React.Component {
	render() {
		let pizzerias = locations.map(function(pizzeria, index) {
			let location = pizzeria.properties
			
			return (
				<div className='thumbnail' key={index}>
					<div className='caption'>
						<h5><Link to={'/pizzerias/' + (index + 1)}>{location.pizzeria}</Link></h5>
					</div>
				</div>
			)
		})

		return (
			<div>
				<h3>Pizzerias</h3>
				<div id='content'>
					<div className='col-xs-3'>
						<SearchForm searchInfo={this.handleSearch} />
					</div>
					<div className='col-xs-3'>
						{pizzerias}
					</div>
				</div>
			</div>
		)
	}
}
