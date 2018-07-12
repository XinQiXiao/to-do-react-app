import React, { PureComponent } from 'react'

const ThemeContext = React.createContext('light')

function ThemeButton(props){
	return (
		<ThemeContext.Consumer>
			{theme => <button {...props} theme={theme} >test context</button>}
		</ThemeContext.Consumer>
	)
}

function ToolBar(props){
	return (
		<div>
			<ThemeButton />
		</div>
	)
}

class ContextComponent extends PureComponent{
	render(){
		return(
			<div>
				<ThemeContext.Provider value="blue">
					<ToolBar />
				</ThemeContext.Provider>
			</div>
		)
	}
}

export default ContextComponent