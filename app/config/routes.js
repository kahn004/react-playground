import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'

var routes = (
	<Route path="/" component={ Main }>
		<IndexRoute component={ Home } />
	</Route>
)

export default routes