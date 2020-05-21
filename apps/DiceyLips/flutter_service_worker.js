'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5f58f6c22f5b15d5681f68266603eab9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/dice1.png": "5e0580134cde323cc6e2d54254b1a605",
"assets/images/dice2.png": "524559a3d0e61efa7b8a165bd2bad0da",
"assets/images/dice20.png": "ff72527b53735a01e74911a5fe439c56",
"assets/images/dice3.png": "683bc715f147a48b2e2dcabf2d573a05",
"assets/images/dice4.png": "3c7e0c5d05aeaa567bb90faf18f79f38",
"assets/images/dice5.png": "ae4a1c88865e22a54c7aeb91f18db784",
"assets/images/dice6.png": "2d7642d5229bb083f5e59cf1cee4aa28",
"assets/images/smiley1.png": "7219ea7d811163c47afc214f8429e574",
"assets/images/smiley10.png": "baaeb47bc59b1237179b321cebd56473",
"assets/images/smiley11.png": "80b3907a29a48cd3c2c96621f6c6e0da",
"assets/images/smiley12.png": "18509bdebb2f35579aef12798094e17b",
"assets/images/smiley2.png": "6711b55abd62a8b6977e22b9891e3148",
"assets/images/smiley20.png": "ff72527b53735a01e74911a5fe439c56",
"assets/images/smiley3.png": "7ffcbd7ae911b6122aa765ef620f0ac4",
"assets/images/smiley4.png": "e6295c66df54c7548041bd50b644dc9c",
"assets/images/smiley5.png": "43af9b771d76cea4f914f5e51c693f34",
"assets/images/smiley6.png": "282c3ed7f8d13f35043752017bed4285",
"assets/images/smiley7.png": "7219ea7d811163c47afc214f8429e574",
"assets/images/smiley8.png": "47ba68bb1238cf8d1c17a84e70939ab9",
"assets/images/smiley9.png": "49fc2385097484d5d5d2f3e0b6724757",
"assets/LICENSE": "829acbc245bd56f693d004352b598b74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d94d57fc78a9c7dbb4b94733a8446ab7",
"/": "d94d57fc78a9c7dbb4b94733a8446ab7",
"main.dart.js": "0cfda9d39230d41abc87291ac9864361",
"manifest.json": "a85170ed930f06fa6e36ab4ebe88acfe"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
