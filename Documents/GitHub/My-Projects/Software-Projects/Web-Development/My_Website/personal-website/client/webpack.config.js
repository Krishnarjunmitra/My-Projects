const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // The main entry point for your React app
  output: {
    path: path.resolve(__dirname, 'build'), // Where your bundled code will be placed
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Load CSS files
      },
      {
        test: /\.(png|jpg|gif|svg|webp)$/,
        type: 'asset',
        generator: {
          filename: 'assets/[name][ext]'
        } // Load image files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Your HTML template file
      filename: 'index.html', // Output filename
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Directory for static content
    },
    port: 3000, // Development server port
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};