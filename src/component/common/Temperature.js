import React, { Component } from 'react'

// const 
const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
}

class Calculator extends Component{
	constructor(props){
		super(props)

		this.state = {
			temperature: '0',
			scale: 'c'
		}

		this._handleCelsiusChange = this._handleCelsiusChange.bind(this)
		this._handleFahrenheitChange = this._handleFahrenheitChange.bind(this)
	}

	_handleCelsiusChange(temperature){
		this.setState({
			scale: 'c', 
			temperature,
		})
	}
	_handleFahrenheitChange(temperature){
		this.setState({
			scale: 'f',
			temperature
		})
	}

	render(){
		const { temperature = '', scale = '' } = this.state
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

		return (
			<div>
				<TemperatureInput scale='c' 
					temperature={celsius} 
					onTemperatureChange={this._handleCelsiusChange}
				/>
				<TemperatureInput scale='f' 
					temperature={fahrenheit}
					onTemperatureChange={this._handleFahrenheitChange}
				/>
				<BoilingVerdict celsius={parseFloat(celsius)}/>
			</div>
		)
	}
}

class TemperatureInput extends Component{
	constructor(props){
		super(props)

		this._handleChange = this._handleChange.bind(this)
	}

	_handleChange(e){
		const {onTemperatureChange = ()=>null} = this.props
		onTemperatureChange(e.target.value)
	}

	render(){
		const { 
			scale = '', temperature = '', 
		} = this.props
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input value={temperature} onChange={this._handleChange}/>
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

function toCelsius(fahrenheit){
	return (fahrenheit - 32) * 5 / 9
}
function toFahrenheit(celsius){
	return (celsius * 9 / 5) + 32
}
function tryConvert(temperature, convert){
	const input = Number.parseFloat(temperature)
	if(Number.isNaN(input)){
		return ''
	}
	const output = convert(input)
	const rounded = Math.round(output * 1000) / 1000 
	return rounded.toString()
}

export default Calculator