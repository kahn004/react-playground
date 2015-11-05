// app/components/Pizzeria.js

import React from 'react'
import { Link } from 'react-router'

import locations from '../api/api'

export default class Pizzeria extends React.Component {
	render () {
		var id = this.props.params.id - 1;
		if (locations[id].properties !== undefined) {
			let location = locations[id].properties;

			return (
				<div>
					<Link to='/pizzerias' className='btn btn-lg btn-danger' id='btn-back'>Back to list</Link>
					<div className='thumbnail'>
						<div className='caption'>
							<h5>{location.pizzeria}</h5>
							<a href={"https://www.google.com/maps/place/" + location.address + ' ' + location.city} target='_blank'>{location.address}</a>
							<p>{location.city}</p>
							<a href={location.website} target='_blank'>Website</a>
						</div>
					</div>
				</div>
			)
		} else {
			return(false);
		}
	}
}
