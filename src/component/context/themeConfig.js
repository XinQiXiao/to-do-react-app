import React from 'react'

const themes = {
	light: {
		foreground: '#fff',
		background: '#222'
	},
	dark: {
		foreground: '#000',
		background: '#eee'
	}
}

const ThemeContext = React.createContext({
	theme: themes.dark,
	toggleTheme: () => {}
})

export {
	themes,
	ThemeContext
}