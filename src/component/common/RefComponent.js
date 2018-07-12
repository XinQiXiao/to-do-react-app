import React, { Component } from 'react'

class CustomTextInputPre extends Component{
	constructor(props){
		super(props)

		// 创建 ref 存储 textInput DOM 元素
		this.textInput = React.createRef()
		this._focusTextInput = this._focusTextInput.bind(this)
	}

	_focusTextInput(){
		// 直接使用原生 API 使 text 输入框获得焦点, 注意：通过 "current" 取得 DOM 节点
		this.textInput.current.focus()
	}

	render(){
		return (
			<div >
				<input type="text" ref={this.textInput}/>
				<input type="button" 
					value="Focus the text input" 
					onClick={this._focusTextInput}
				/>
			</div>
		)
	}
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = null

    this.setTextInputRef = element => {
      this.textInput = element
    }

    this.focusTextInput = () => {
      // 直接使用原生 API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus()
    }
  }

  componentDidMount() {
    // 渲染后文本框自动获得焦点
    this.focusTextInput()
  }

  render() {
    // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}

export default CustomTextInput