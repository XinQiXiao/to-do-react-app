/**
 * 高级 Forwarding Refts
 */
import React, {Component, PureComponent} from 'react'

function logProps(WrappedComponent){
	class LogProps extends Component{
		componentDidUpdate(preProps){
			console.log('old props: ', preProps)
			console.log('new props: ', this.props)
		}

		render(){
			return <WrappedComponent {...this.props}/>
		}
	}

	return LogProps
}

class FancyButton extends PureComponent{
	render(){
		const {name, age, sex} = this.props
		return (
			<div>
				<span>1名字：{name} </span>
				<span>2年龄：{age} </span>
				<span>3性别：{sex === 1 ? '女' : '男'} </span>
			</div>
		)
	}
}

const FancyButtonNew = logProps(FancyButton)

class ForwardingRefs extends Component{
	constructor(props){
		super(props)

		this.state = {
			name: 'ceshiName',
			age: 0,
			sex: 0,
		}

		this._propsChange =	this._propsChange.bind(this)
	}

	_propsChange(){
		this.setState(preState => ({
			name: preState.name+'&',
			age: preState.age+1,
			sex: preState.sex === 0 ? 1 : 0
		}))
	}

	render(){
		return (
			<div>
				<FancyButtonNew {...this.state}/>
				<button onClick={this._propsChange}>Fancy props change</button>
			</div>
		)
	}
}

export default ForwardingRefs