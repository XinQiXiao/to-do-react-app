import React, { Component } from 'react'


class Calculator extends Component{
	constructor(props){
		super(props)

		this.state = {
			temperature: ''
		}

		this._handleChange = this._handleChange.bind(this)
	}

	_handleChange(e){
		this.setState({
			temperature: e.target.value
		})
	}

	render(){
		const {temperature} = this.state
		return (
			<fieldset>
				<legend>输入一个摄氏温度</legend>
				<input value={temperature} onChange={this._handleChange}/>
				<BoilingVerdict celsius={parseFloat(temperature)}/>
			</fieldset>
		)
	}
}

function BoilingVerdict(props){
	const {celsius = 0} = props
	if(celsius >= 100){
		return <p>水会烧开</p>
	}
	return <p>水不会烧开</p>
}

export default Calculator