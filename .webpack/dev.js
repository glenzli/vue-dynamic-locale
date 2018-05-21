import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from '../webpack.base.config'

const webpackConfig = merge(baseConfig, {
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'vue-dynamic-locale.js'
  }
})


webpack(webpackConfig, (err, stats) => {
  process.stdout.write(stats.toString() + '\n')
})