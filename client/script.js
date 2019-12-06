
/*############################################
	VUE.js like an example
############################################*/

import AuthenticationService from './services/auth'

export default {
	data() {
		return {
			email: '',
			password: '',
			error: null
		}
	},
	methods: {
		async register() {
			try {
				await AuthenticationService.register({
					email: this.email,
					password: this.password
				})
			} catch(error) {
				this.error = error.response.data.error
			}
		}
	}
}
