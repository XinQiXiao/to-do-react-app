import React, { Component } from 'react'


class Clock extends Component{
	constructor(props){
		super(props)

		this.state = {
			date: new Date()
		}
	}

	componentDidMount(){
		this.timerID = setInterval(()=> this._tick(), 1000)
	}

	componentWillUnmount(){
		clearInterval(this.timerID)
	}

	_tick(){
		this.setState({
			date: new Date()
		})
	}

	render(){
		const { date } = this.state
		return (
			<div >
				<h1>Hello, world!</h1>
				<h2>It is {date.toLocaleTimeString()}</h2>
			</div>
		)
	}
}

export default Clock
