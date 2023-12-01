const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: 'Cod-ito/CRUD/crud-vue/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
});
