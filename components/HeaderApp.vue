<template>
	<header class="bg-gray-200 w-full p-4 flex justify-between">
		<logo class="w-12" />

		<nav>
			<nuxt-link to="/" class="px-2 mx-2">Index</nuxt-link>
      		<nuxt-link to="/page2" class="px-2 mx-2">page2</nuxt-link>
			<a href="/page3" class="px-2 mx-2">page3</a>
			<a href="/fake3" class="px-2 mx-2">fake3</a>
		</nav>

		<a href="/login">Login</a>
	</header>
</template>

