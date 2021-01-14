<template>
  <div class="container mx-auto">
    <h1 class="text-5xl font-bold title">
      Home
    </h1>
	<p>{{ message }}</p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
	components: {
		Logo
	},

	data() {
		return {
			message: null
		}
	},

	async created() {
		fetch(`/api/message`)
			.then(response => response.json())
			.then(data => {
				this.message = data.text;
			});
	}
}
</script>
