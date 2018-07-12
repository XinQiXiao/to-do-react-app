/**
 * test component shouldComponentUpdate
 */

import React, { Component, PureComponent } from 'react'

// class CounterButton extends Component{
// 	constructor(props){
// 		super(props)

// 		this.state = {count: 1}
// 		this._btnClick = this._btnClick.bind(this)
// 	}

// 	shouldComponentUpdate(nextProps, nextState){
// 		if(this.props.color !== nextProps.color){
// 			return true
// 		}
// 		if(this.state.count !== nextState.count){
// 			return true
// 		}
// 		return false
// 	}

// 	_btnClick(){
// 		this.setState(preState => ({
// 			count: preState.count + 1
// 		}))
// 	}

// 	render(){
// 		return (
// 			<div>
// 				<button
// 					color={this.props.color}
// 					onClick={this._btnClick}
// 				>
// 					Count:{this.state.count}
// 				</button>
// 			</div>
// 		)
// 	}
// }

class ListOfWords extends PureComponent{
	render(){
		const {words, name} = this.props
		return (
			<div>
				<span>{words.join(',')}</span>
				<br/>
				<span>{`name=${name}`}</span>
			</div>
		)
	}
}

class CounterButton extends Component{
	constructor(props){
		super(props)

		this.state = {
			words: ['marklar'],
			person: {
				name: 'lisi',
				age: '18'
			}
		}

		this._btnClick = this._btnClick.bind(this)
		this._personChange = this._personChange.bind(this)
	}

	_btnClick(){
		this.setState(preState => ({
			words: [...preState.words, 'marklar']
		}))
	}

	_personChange(){
		const {person} = this.state
		person.name += '& '
		this.setState({
			person: person
		})
	}

	render(){
		const {words, person} = this.state
		return (
			<div>
				<button
					onClick={this._btnClick}
				>add word</button>
				<button onClick={this._personChange}>person change</button>
				<ListOfWords words={words} name={person.name}/>
			</div>
		)
	}
}

export default CounterButton