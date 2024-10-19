module.exports = {
  inputDir: './assets/icons', // (required)
  outputDir: './src/shared/Ui/Icon/dist/', // (required)
  fontTypes: ['ttf'],
  assetTypes: ['ts', 'json'],
  formatOptions: {
    json: {
      // render the JSON human readable with two spaces indentation (default is none, so minified)
      indent: 2,
    },
    ts: {
      types: ['enum'],
      singleQuotes: true,
      enumName: 'IconNames',
    },
  },
  pathOptions: {
    ts: './src/shared/Ui/Icon/icon.ts',
  },
};
