(function() {
  'use strict';

  var CACHE_NAME = 'AWDA_CACHE';
  var urlsToCache = [
    '.',
    'index.html',
    'css/main.min.css',
    'js/main.js'
  ];

  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          return cache.addAll(urlsToCache);
        })
        .catch(console.error)
    );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          return response || fetchAndCache(event.request);
        })
    );
  });

  function fetchAndCache(url) {
    return fetch(url)
      .then(function(response) {
        // Check if we received a valid response
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return caches.open(CACHE_NAME)
        .then(function(cache) {
          cache.put(url, response.clone());
          return response;
        });
      })
      .catch(console.error);
  }

})();
