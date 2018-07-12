import React, { Component } from 'react'

// components
import { 
  ClockComponent, FormComponent, TemperatureComponent, RefComponent, FileInput,
  MountComponent,
} from './component'

// img
import logo from './logo.svg' 

// styles
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <div className="app-content">
          <ClockComponent />
          <FormComponent />
          <TemperatureComponent />
          <RefComponent />
          <FileInput />
          <MountComponent />
        </div>
      </div>
    )
  }
}



export default App
