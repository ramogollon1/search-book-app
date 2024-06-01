module.exports = function (api) {
  api.cache(true);

  const presets = ['module:@react-native/babel-preset'];
  const plugins = [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@context': './src/context',
          '@screens': './src/screens',
          '@models': './src/models',
          '@utils': './src/utils',
          '@repositories': './src/repositories',
          '@test': './src/test',
          '@hooks': './src/hooks',
        },
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
