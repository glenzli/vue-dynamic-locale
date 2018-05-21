import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from '../webpack.base.config'

const webpackConfig = merge(baseConfig, {
  devtool: 'cheap-module-source-map',
  mode: 'production',
  output: {
    filename: 'vue-dynamic-locale.min.js'
  }
})

webpack(webpackConfig, (err, stats) => {
  process.stdout.write(stats.toString() + '\n')
})