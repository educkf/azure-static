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
			const response = await fetch("/.auth/me");
			const payload = await response.json();
			const { clientPrincipal } = payload;
			this.$store.commit('user', clientPrincipal);
		}
	}
}
</script>
