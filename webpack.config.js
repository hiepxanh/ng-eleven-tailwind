// const merge = require('webpack-merge');
const { merge } = require('webpack-merge'); // new version webpack-merge

module.exports = (config) => {
  const isProd = config.mode === "production";
  const tailwindConfig = require("./tailwind.config.js")(isProd);
  console.log('merge?', merge);
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              syntax: 'postcss-scss',
              plugins: [
                require('postcss-import'),
                require('tailwindcss')(tailwindConfig),
                require('autoprefixer'),
              ]
            }
          }
        }
      ]
    }
  });
};
