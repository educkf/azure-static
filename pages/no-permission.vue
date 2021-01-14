<template>
  <div class="container mx-auto">
    <h1 class="text-5xl font-bold title">
      Ops
    </h1>
	<p>You have no access to that page...</p>
	<p v-if="!user">Maybe if you <a href="/login">Sign in</a>?</p>
  </div>
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
