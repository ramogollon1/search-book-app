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
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
