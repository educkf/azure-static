export default {
	state() {
		return {
			user: null
		};
	},

	mutations: {
		set_user(state, payload) {
			state.user = payload;
		}
	},
};
