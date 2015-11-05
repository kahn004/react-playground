// app/components/SearchForm.js

import React from 'react'
import ReactDOM from 'react-dom'

export default class SearchForm extends React.Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (event) {
    event.preventDefault()
    let query = ReactDOM.findDOMNode(this.refs.query).value.trim()
    this.submitQuery(query)
    ReactDOM.findDOMNode(this.refs.query).value = ''
  }
  submitQuery (query) {
    console.log('Query', query)
  }
  render () {
    return (
      <div className='thumbnail' id='search-box' onSubmit={this.handleSubmit}>
        <form id='search-form'>
          <input type="text" className='form-control' placeholder='search by city' ref='query'/>
        </form>
      </div> 
    ) 
  }
}