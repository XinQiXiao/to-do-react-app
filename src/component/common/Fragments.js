/**
 * fragments 
 */
import React, { PureComponent, Component, Fragment } from 'react'

class FragmentsComponent extends Component{
	render(){
		return (
			<ul>
				<Columns items={[1, 2, 3]}/>
			</ul>
		)
	}
}

class Columns extends PureComponent{
	render(){
		const {items = []} = this.props
		return (
			<Fragment>
				<li>hello ...</li>
				<li>
					{items.map((item, idx) => (
						<Fragment key={idx}>
							<span>number: {item} </span>
							<span>string: {item}</span>
						</Fragment>
					))}
				</li>
			</Fragment>
		)
	}
}

export default FragmentsComponent