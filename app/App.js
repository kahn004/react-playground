// app/App.js

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import Main from './components/Main'
import About from './components/About'
import Pizzerias from './components/Pizzerias'
import Pizzeria from './components/Pizzeria'

import locations from './api/api'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Main name='Router' />
				{this.props.children}
			</div>
		)
	}
}

render((
  <Router>
    <Route path="/" component={App}>
      <Route path='/pizzerias' component={Pizzerias}/>
      <Route path='/pizzerias/:id' component={Pizzeria}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));
