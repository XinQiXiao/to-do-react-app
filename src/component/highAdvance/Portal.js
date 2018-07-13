/**
 * Portal
 */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root')

class Modal extends Component{
	constructor(props) {
		super(props)
		
    this.el = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class PortalComponent extends Component{
	constructor(props) {
		super(props)
		
    this.state = {clicks: 0}
    this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick(){
		this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }))
	}

	render(){
		return (
			<div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
		)
	}
}

function Child() {
  return (
    <div >
      <button>Click</button>
    </div>
  );
}

export default PortalComponent