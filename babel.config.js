module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': ['./src/components'],
          '@database': ['./src/database'],
          '@items': ['./src/items'],
          '@res': ['./src/res'],
          '@router': ['./src/router'],
          '@screens': ['./src/screens'],
          '@reduxStore': ['./src/store'],
          '@reducers': ['./src/store/reducers'],
          '@utils': ['./src/utils'],
        },
      },
    ],
  ],
};
