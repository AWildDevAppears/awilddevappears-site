importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "about.html",
    "revision": "395f8af266328531860760f89c57270c"
  },
  {
    "url": "blog.html",
    "revision": "1c15a8aff28cfb9a61767567f3ed81f2"
  },
  {
    "url": "blog/post-one.html",
    "revision": "c380d81c3f410e080b11835515e934f4"
  },
  {
    "url": "index.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "projects.html",
    "revision": "c587c52ac7a345bb604e798635d9273e"
  },
  {
    "url": "projects/wogo.html",
    "revision": "7f8b457c9a9c8247a2ee01f5bc9dfdb7"
  },
  {
    "url": "styleguide.html",
    "revision": "8982674db8d4a3a3641598a3e753c305"
  },
  {
    "url": "js/main.js",
    "revision": "b7c0e3e86127f155f415a2432ca3c763"
  },
  {
    "url": "css/main.min.css",
    "revision": "30de2e0361cc39b596310d500e33c0f7"
  },
  {
    "url": "img/bg.svg",
    "revision": "0b66756e3123be66a8c497c93a3b209f"
  },
  {
    "url": "img/wo-logo.svg",
    "revision": "daa2f139fbef7422c91fe8beee6cea2d"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/https:\/\/use.fontawesome.com\/c3a9dd4412.js/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/fonts.googleapis.com\/css?family=Libre+Franklin:300|VT323/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/cdn.polyfill.io\/v2\/polyfill.min.js/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
