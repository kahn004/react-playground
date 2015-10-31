import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router';

let Hello = React.createClass({
	render() {
		return (
			<nav className="navbar navbar-inverse">
		        <div className="container-fluid">
		          <div className="navbar-header">
		            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		              <span className="sr-only">Toggle navigation</span>
		              <span className="icon-bar"></span>
		              <span className="icon-bar"></span>
		              <span className="icon-bar"></span>
		            </button>
		            <a className="navbar-brand">Pizza Client</a>
		          </div>
		        <div id="navbar" className="navbar-collapse collapse">
		          <ul className="nav navbar-nav">
		            <li><Link to="/">Home</Link></li>
		            <li><Link to="/about">About</Link></li>
		            <li><Link to="/pizzerias">Pizzerias</Link></li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		)
	}
});

let App = React.createClass({
	render() {
		return (
			<div>
				<Hello name='Router' />
				{this.props.children}
			</div>
		)
	}
});

let Pizzerias = React.createClass({
	getInitialState() {
		return(
			{
				locations: [
					{
						type: 'Feature',
						properties: {
							city: "Oakland",
							pizzeria: "Hi-Life",
							website: "http://www.hilifeoakland.com",
							address: "400 15th St",
							markersize: "medium",
							markercolor: "ffff00",
							markersymbol: "restaurant"
						},
						geometry: {
							type: "Point",
							coordinates: [
								-122.2694895,
								37.805068
							]
						}
					},
					{
						type: "Feature",
						properties: {
							city: "Oakland",
							pizzeria: "Zachary's",
							website: "http://zacharys.com/locations/oakland",
							address: "5801 College Ave.",
							markersize: "medium",
							markercolor: "ffff00",
							markersymbol: "restaurant"
						},
						geometry: {
							type: "Point",
							coordinates: [
								-122.2521705,
								37.8462724
							]
						}
					}
				]
			}
		)
	},
	// componentDidMount() {
	// 	$.ajax({
	// 		url: './api/pizzerias.json',
	// 		type: 'get',
	// 		dataType: 'JSON',
	// 		success: function(data) {
	// 			console.log(data);
	// 			this.setState({ locations: data})
	// 		}.bind(this)
	// 	})
	// },
	render() {
	    let pizzerias = this.state.locations.map(function(pizzeria, index) {
	      let location = pizzeria.properties
	      return(
	          <div className='thumbnail' key={index}>
	            <div className='caption'>
	              <h5>{location.pizzeria}</h5>
	              <a href={"https://www.google.com/maps/place/" + location.address + ' ' + location.city} target='_blank'>{location.address}</a>
	              <p>{location.city}</p>
	              <a href={location.website} target='_blank'>Website</a>
	            </div>
	          </div>
	      )
	    });
	    return(
	      <div>
	        <h3>Pizzerias</h3>
	          {pizzerias}
	      </div>
	    )
	}
});

let About = React.createClass({
	render() {
		return (
			<div>
				<h1>About</h1>
				<p>words..</p>
			</div>
		)
	}
});

render((
  <Router>
    <Route path="/" component={App}>
      <Route path='/pizzerias' component={Pizzerias}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));