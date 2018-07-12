import React, { Component } from 'react'

class FileInput extends Component {
  constructor(props) {
		super(props)
		
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  _handleSubmit(event) {
		event.preventDefault()
		const {files = []} = this.fileInput
		console.log('fileInput=>', this.fileInput.files)
		if(Array.isArray(files) && files.length > 0){
			alert(
				`Selected file - ${this.fileInput.files[0].name}`
			)
		}
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <label>
          Upload file:
          <input
            type="file"
            ref={input => {
              this.fileInput = input
            }}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default FileInput