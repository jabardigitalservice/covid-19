module.exports = {
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
      orientation: 'portrait'
    }
  }
}
