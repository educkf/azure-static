<template>
  <div class="container mx-auto">
    <h1 class="text-5xl font-bold title">
      Page 3 - Logged users only!
    </h1>

    <hr class="my-4">

    <div class="my-30">
      <div v-for="user in users" :key="user.id" class="py-6 border-b">
        {{ user.name }} {{ user.surname }} - {{ user.email }}
      </div>
    </div>
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
      users: []
    }
  },

  async asyncData ({ params, error }) {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => json)

    return {
      users: users
    }
  },
}
</script>
