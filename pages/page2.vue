<template>
  <div class="container mx-auto">
    <h1 class="text-5xl font-bold title">
      Page 2
    </h1>

    <hr class="my-4">

    <nuxt-link to="/">Index</nuxt-link>
    <nuxt-link to="/page3">page3</nuxt-link>

    <div class="my-30">
      <div v-for="post in posts" :key="post.id" class="py-6 border-b">
        {{ post.title }}
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
      posts: []
    }
  },

  async asyncData ({ params, error }) {
    const posts = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => json)

    return {
      posts: posts
    }
  },
}
</script>
