const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  webpack: override(
    addWebpackPlugin(
      new webpack.SourceMapDevToolPlugin({
        noSources: false,
        filename: '[file].map',
      }),
    ),
    addWebpackAlias({
      '@constants': path.resolve(__dirname, './src/constants'),
      '@components': path.resolve(__dirname, './src/components'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@store': path.resolve(__dirname, './src/store'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@mocks': path.resolve(__dirname, './src/mocks'),
    }),
  ),
}
