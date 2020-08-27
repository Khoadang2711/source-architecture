const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const config = {
  entry: [
    './src/master/master.js',
],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].bundle.js",
    chunkFilename: '[name].js'
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  
  devServer: {
    open: true,
    stats: 'errors-only',
    host: 'localhost',
    port: 8080,
    watchContentBase: true,
    compress: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/master/master.pug'
    }),
    new MiniCssExtractPlugin({
        filename: './css/style.min.css',
    })
  ],
  module: {
    rules: [
      { 
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  }
};
module.exports = (env, argv) => {
    
if (argv.mode === 'development') {
    
}
 if (argv.mode === 'production') {}

return config;

}