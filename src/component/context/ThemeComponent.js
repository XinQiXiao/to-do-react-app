import React, {PureComponent} from 'react'

import ThemeButton from './ThemeButton'
import { themes, ThemeContext } from './themeConfig'

class ThemeComponent extends PureComponent{
	constructor(props){
		super(props)

		this._changeTheme = ()=> {
			this.setState(preState => ({
				theme: preState.theme === themes.dark ? themes.light : themes.dark
			}))
		}

		this.state = {
			theme: themes.light,
			toggleTheme: this._changeTheme
		}
	}

	render(){
		return (
			<div>
				<ThemeContext.Provider value={this.state}>
					<Content />
				</ThemeContext.Provider>
			</div>
		)
	}
}

function Content(){
	return (
		<div>
			<ThemeButton />
		</div>
	)
}

export default ThemeComponent