import { join } from 'path'

export default {
  entry: './index',
  mode: 'development',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'Spotify'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        include: join(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
