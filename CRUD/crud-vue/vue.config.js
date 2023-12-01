const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: 'https://random-dev143.github.io/Cod-ito/CRUD/crud-vue/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
});
