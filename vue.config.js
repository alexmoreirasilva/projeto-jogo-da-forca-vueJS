const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false // Close eslint verification
  
  publicPath: process.env.NODE_ENV === 'production'
  ? '/projeto-jogo-da-forca-vueJS/'
  : '/'
})
