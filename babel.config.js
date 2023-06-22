/* eslint-disable prettier/prettier */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Asset': './src/Asset',
          '@CompositeComponents': './src/Components/CompositeComponents',
          '@UIComponents': './src/Components/UIComponents',
          '@Context': './src/Context',
          '@Hooks': './src/Hooks',
          '@Navigation': './src/Navigation',
          '@Routes': './src/Routes',
          '@Saga': './src/Saga',
          '@Screens': './src/Screens',
          '@Service': './src/Service',
          '@Store': './src/Store',
          '@root': './',
        },
      },
    ],
  ],
};
