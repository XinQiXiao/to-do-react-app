/**
 * Error Boundaries
 */

import React, { Component, PureComponent } from 'react'

class ErrorBoundaries extends PureComponent{
	constructor(props){
		super(props)

		this.state = { hasError: false }
	}

	componentDidCatch(error, info){
		this.setState({
			hasError: true
		})
		console.log('ErrorBoundaries componentDidCatch error=>', error, ' &info=>', info)
	}

	render(){
		const {hasError} = this.state
		if(hasError){
			return <h1>Something went wrong.</h1>
		}
		return this.props.children
	}
}

class ErrorComponent extends Component{
	render(){
		return (
			<ErrorBoundaries >
				<span>ErrorComponent</span>
			</ErrorBoundaries>
		)
	}
}

export default ErrorComponent