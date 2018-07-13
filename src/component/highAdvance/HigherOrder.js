/**
 * 高级 高阶组件 
 */
import React, { PureComponent, Component } from 'react'

class CommentList extends PureComponent{
	constructor(props){
		super(props)

		this.state = {
			comments: []
		}

		this._handleChange = this._handleChange.bind(this)
	}

	_handleChange(){

	}

	render(){
		return null
	}
}

class HigherOrderComponent extends Component{
	render(){
		return (
			<div>
				HigherOrderComponent
				<CommentList />
			</div>
		)
	}
}

export default HigherOrderComponent