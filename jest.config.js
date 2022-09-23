module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    '^lodash-es$': 'lodash',
    uuid: require.resolve('uuid')
  }
}
