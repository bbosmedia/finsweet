/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xlg: { max: '1440px' },
			lg: { max: '1024px' },
			md: { max: '768px' },
			xlsm: { max: '576px' },
			lsm: { max: '425px' },
			sm: { max: '375px' },
			xsm: { max: '320px' },
		},
		extend: {
			colors: {
				main: '#444CFC',
				darkBlue: '#232536',
				lightBlue: '#ECF8F9',
				lightGrey: '#F9F9FF',
				siteOrange: '#FFE6D2',
				siteDark: '#232536',
			},
		},
	},
	plugins: [],
}
