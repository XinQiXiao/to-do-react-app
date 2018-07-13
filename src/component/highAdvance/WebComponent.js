/**
 * 高级 Web Components
 */

import React, { PureComponent } from 'react'

class WebComponent extends PureComponent{
	render(){
		return (
			<div>
				Hello <x-search>{this.props.name}</x-search>!
				<brick-flipbox>
					<div>front</div>
					<div>back</div>
				</brick-flipbox>
			</div>
		)
	}
}

export default WebComponent