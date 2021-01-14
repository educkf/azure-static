<template>
    <div>
        <header-app />
        <nuxt />
    </div>
</template>

<script>
export default {
	created() {
		this.getUserInfo();
	},
	methods: {
		async getUserInfo() {
			fetch("/.auth/me")
				.then(response => response.json())
				.then(data => {
					console.log(data);
					this.$store.commit('set_user', data.clientPrincipal);
				});
		}
	}
}
</script>
