// app/App.js

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

import Main from './components/Main'
import Home from './components/Home'
import About from './components/About'
import Pizzerias from './components/Pizzerias'
import Pizzeria from './components/Pizzeria'

import locations from './api/api'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Main name='React Sandbox' />
				{ this.props.children }
			</div>
		)
	}
}

render((
	<Router>
		<Route path="/" component={ App }>
			<IndexRoute component={ Home } />
			<Route path="about" component={ About } />
			<Route path="pizzerias" component={ Pizzerias } />
			<Route path="pizzerias/:id" component={ Pizzeria } />
		</Route>
	</Router>
), document.getElementById('app'));
