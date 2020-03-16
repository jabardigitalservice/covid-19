module.exports = {
  devServer: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js'
    },
    name: 'Jabar COVID-19',
    themeColor: '#399F4F',
    manifestOptions: {
      background_color: '#399F4F',
      display: 'fullscreen',
      orientation: 'portrait'
    }
  }
}
