// app/components/Dev.js

import React from 'react'

export default class Dev extends React.Component {
	constructor (props) {
		super (props)

		this.finishEdit = this.finishEdit.bind(this)
		this.checkEnter = this.checkEnter.bind(this)
		this.edit = this.edit.bind(this)
		this.renderEdit = this.renderEdit.bind(this)
		this.renderDev = this.renderDev.bind(this)

		this.state = {
			editing: false
		}
	}
	render () {
		const editing = this.state.editing

		return (
			<div>
				{ editing ? this.renderEdit() : this.renderDev() }
			</div>
		)
	}
	renderEdit () {
		return (
			<input
				type="type"
				autoFocus={true}
				defaultValue={this.props.name}
				onBlur={this.finishEdit}
				onKeyPress={this.checkEnter} />
		)
	}
	renderDev () {
		const onDelete = this.props.onDelete

		return (
			<div onClick={this.edit}>
				<h6>{ this.props.name }</h6>
				{ onDelete ? this.renderDelete() : null }
			</div>
		)
	}
	renderDelete () {
		return (
			<button className="delete" onClick={this.props.onDelete}>delete</button>
		)	
	}
	edit () {
		this.setState({
			editing: true
		})
	}
	finishEdit (e) {
		this.props.onEdit(e.target.value)

		this.setState({
			editing: false
		})
	}
	checkEnter (e) {
		if (e.key === 'Enter') {
			this.finishEdit(e)
		}
	}
}