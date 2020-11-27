const alias = {
  '@components': './src/components',
  '@utils': './src/utils',
  '@hooks': './src/hooks',
  '@theme': './src/theme',
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['module:react-native-dotenv', ['module-resolver', { alias: alias }]],
};
