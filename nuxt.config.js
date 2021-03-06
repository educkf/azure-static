
export default {
	target: 'static',
	components: true,

	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	vue: {
		config: {
			devtools: true
		}
	},

	loading: { color: '#fff' },

	css: [
	],

	plugins: [
	],

	buildModules: [
		'@nuxtjs/tailwindcss'
	],

	modules: [
	],

	build: {
		extend (config, ctx) {
		}
	}
}
