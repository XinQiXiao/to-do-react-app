import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

// components
import { 
  BaseLayout
} from './component'

// img
// import logo from './logo.svg' 

// styles
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    )
  }
}



export default App
