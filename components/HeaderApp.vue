<template>
	<header class="bg-gray-200 w-full p-4 flex justify-between">
		<logo class="w-12" />

		<nav>
			<nuxt-link to="/" class="px-2 mx-2">Index</nuxt-link>
      		<nuxt-link to="/page2" class="px-2 mx-2">page2</nuxt-link>
			<a href="/page3" class="px-2 mx-2">page3</a>
			<a href="/page4" v-if="user" class="px-2 mx-2 text-red-400">Admin only</a>
			<a href="/fake3" class="px-2 mx-2">fake3</a>
		</nav>

		<a v-if="!user" href="/login">Login</a>
		<div v-else>
			olá, {{ user.userDetails }} <span class="mx-4 border-l border-gray-200"></span>
			<a href="/logout">Logout</a>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		user() {
			return this.$store.state.user;
		}
	}
}
</script>


