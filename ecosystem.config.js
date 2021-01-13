module.exports = {
  apps: [
    {
      name: 'static.eckf.pw',
      port: 3000,
      script: './node_modules/nuxt/bin/nuxt.js',
      args      : "start",
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
