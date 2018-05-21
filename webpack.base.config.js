import path from 'path'
import eslintFriendlyFormatter from 'eslint-friendly-formatter'

var webpackConfig = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_module/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: eslintFriendlyFormatter
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'VueDynamicLocale',
    libraryTarget: 'umd'
  },
  externals: {
    Vue: 'vue',
    JsObjectex: 'js-objectex'
  },
  target: 'node'
}

export default webpackConfig
