module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Components/CompositeComponents':
            './src/Components/CompositeComponents',
          '@Components/UIComponents': './src/Components/UIComponents',
          '@Asset': './src/Asset',
          '@Context': './src/Context',
          '@Navigation': './src/Navigation',
          '@Screens': './src/Screens',
        },
      },
    ],
  ],
};
