<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Static 2
      </h1>
      <nuxt-link to="/">Index</nuxt-link>
      <nuxt-link to="/page3">page3</nuxt-link>

      <div class="my-30">
        <div v-for="post in posts" :key="post.id" class="py-6 border-b">
          {{ post.title }}
        </div>
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.my-30 {
  margin-top: 30px;
  margin-bottom: 30px;
}

.py-6 {
  padding-top: 6px;
  padding-bottom: 6px;
}

.border-b {
  border-bottom: 1px solid #ddd;
}
</style>
