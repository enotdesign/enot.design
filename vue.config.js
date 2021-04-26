// CARGAR AUTOMATICO EL CSS
const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
  // plugins:[
  //   new HtmlWebpackPlugin({
  //     title: 'ENOT',
  //     filename: 'index.html',
  //     inject:'body',
  //   })
  // ]
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/main.scss'),
      ],
    })
}



// const path = require('path');

// module.exports = {
//   entry: 'index.js',
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'index_bundle.js',
//   },
//   plugins: [
//     new HtmlWebpackPlugin()
//   ],
// };

