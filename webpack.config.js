const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/app.js'),
    extension: path.resolve(__dirname, 'src/extension.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|tiff|ico|svg|eot|otf|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // publicPath: 'chrome-extension://cajgipjambaenllifmkbeieikihdljgj',
              context: path.resolve(__dirname, 'src'),
              name: '[path][name]-[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.scss',
      '.less',
      '.css',
      '.png',
      '.svg',
      '.gif',
      '.jpeg',
      '.jpg',
    ],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
