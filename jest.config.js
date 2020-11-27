module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!(react-native|native-base-.*|.*react-native-.*)/)'],
  setupFiles: ['./jest.setup.js'],
};
