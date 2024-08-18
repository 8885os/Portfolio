const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			width: {
				'3p': '3%',
			},
			ml: {
				'3p': '3%',
			},
			mr: {
				'3p': '3%',
			},
			fontSize: {
				button: ['1.2rem', '2rem'],
			},
			animation: {
				slide: 'slide 20s linear infinite',
			},
			backdropBlur: {
				heavyblur: '1000px',
			},
			padding: {
				'1p': '1px',
			},
			keyframes: {},

			plugins: [],
		},
	},
}
