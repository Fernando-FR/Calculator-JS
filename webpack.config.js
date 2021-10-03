const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {  entry: './src/js/index.js',
    mode:'production',
    output: {
        filename: 'script.js',
        path: __dirname,
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'styles.css'
    })],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
            MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
};