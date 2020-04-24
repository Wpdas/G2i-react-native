module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@assets': './src/assets',
            '@theme': './src/theme/index.tsx',
            '@screens': './src/screens/',
            '@store': './src/store/',
            '@routes': './src/routes/',
            '@api': './src/api/',
          },
        },
      ],
    ],
  };
};
