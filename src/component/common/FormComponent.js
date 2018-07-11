import React, { Component } from 'react'

class FormComponent extends Component{
	constructor(props){
		super(props)

		this.state = {
			name: '',
			commits: 'Please write an essay about your favorite DOM element.',
			select: 'java'
		}

		this._handleSubmit = this._handleSubmit.bind(this)
		this._handleChange = this._handleChange.bind(this)
	}

	_handleChange(e){
		const target = e.target 
		const value = target.value
		const name = target.name
		this.setState({
			[name]: value
		})
	}

	_handleSubmit(event){
		const {name, commits, select} = this.state
		alert(`Submit content is name='${name}' mulInput='${commits}' select='${select}'`)
		event.preventDefault()
	}

	render(){
		const { name = '', commits = '', select = ''} = this.state
		return (
			<form onSubmit={this._handleSubmit}>
				<label>
					Name: 
					<input type="text" name="name" value={name} onChange={this._handleChange}/>
				</label>
				<br />
				<label >
					Commit:
					<textarea value={commits} name="commits" onChange={this._handleChange}></textarea>
				</label>
				<br />
				<label>
					Pick your favorite language,
					<select value={select} name="select" onChange={this._handleChange}>
						<option value="java" >Java</option>
						<option value="javascript" >JavaScript</option>
						<option value="oc" >Object-C</option>
					</select>
				</label>
				<br />
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}

export default FormComponent