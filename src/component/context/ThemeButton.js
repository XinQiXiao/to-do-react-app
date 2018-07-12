import React, {} from 'react'

import { ThemeContext } from './themeConfig'

function ThemedButton(props){
	return(
		<ThemeContext.Consumer>
			{
				({theme, toggleTheme}) => (
					<button onClick={toggleTheme} style={{backgroundColor: theme.background}}>
						change toggle theme.
					</button>
				)
			}
		</ThemeContext.Consumer>
	)
}

export default ThemedButton