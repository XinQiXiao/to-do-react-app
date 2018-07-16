/**
 * 高级 Render Props 
 */
import React, { PureComponent} from 'react'

// 普通 render props
class Mouse extends PureComponent{
	constructor(props){
		super(props)

		this.state = {x: 0, y: 0}

		this._handleMouseMove = this._handleMouseMove.bind(this)
	}

	_handleMouseMove(e){
		this.setState({
			x: e.clientX,
			y: e.clientY,
		})
	}

	render(){
		return (
			<div onMouseMove={this._handleMouseMove} style={{background: '#fff', height: '100%'}}>
				{/* ...but how do we render something other than a <p> ? */}
				{this.props.render(this.state) }
				{/*this.props.children(this.state)*/}
			</div>
		)
	}
}

class Cat extends PureComponent{
	render(){
		const {mouse} = this.props
		return (
			<img src={require('../../assets/cat.jpg')} alt="猫咪"
				style={{ position: 'absolute', left: mouse.x, top: mouse.y, width:100, height:60 }}
			/>
		)
	}
}

class RenderPropsComponent extends PureComponent{
	render(){
		return (
			<div style={{height: '10%'}}>
				<h1 >Move the mouse around on picture!</h1>
				<Mouse render={mouse => (
					<Cat mouse={mouse}/>
				)}/>
				{/*<Mouse>
					{mouse => (
						<p>The mouse position is {mouse.x}, {mouse.y}</p>
					)}
				</Mouse>*/}
			</div>
		)
	}
}

export default RenderPropsComponent