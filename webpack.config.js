const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './docs/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'cot-experience',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      cote: path.join(__dirname, 'src'),
      'styled-components': require.resolve('./node_modules/styled-components')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "babel-loader"
      // },
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: { loader: 'awesome-typescript-loader' }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled-components'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: 'docs/'
  }
};
