module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/3i-entry-exit-client/'
    : './',
  outputDir: 'docs',
}