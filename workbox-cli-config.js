module.exports = {
  globDirectory: './',
  globPatterns: [
    '**/*.html',
    'js/**/*.js',
    'css/**/*.min.css',
    'img/**/*.{svg,png}'

  ],
  swDest: './service-worker.js',
  globIgnores: [
    'node_modules/**/*',
    '_src/**/*',
  ],
  runtimeCaching: [
    {
      urlPattern: new RegExp('https://use.fontawesome.com/c3a9dd4412.js'),
      handler: 'staleWhileRevalidate',
    },
    {
      urlPattern: new RegExp('https://fonts.googleapis.com/css?family=Libre+Franklin:300|VT323'),
      handler: 'staleWhileRevalidate',
    }
  ]
};
