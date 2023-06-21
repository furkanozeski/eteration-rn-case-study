/* eslint-disable prettier/prettier */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@CompositeComponents': './src/Components/CompositeComponents',
          '@UIComponents': './src/Components/UIComponents',
          '@Asset': './src/Asset',
          '@Context': './src/Context',
          '@Navigation': './src/Navigation',
          '@Screens': './src/Screens',
          '@Routes': './src/Routes',
          '@root': './',
        },
      },
    ],
  ],
};
