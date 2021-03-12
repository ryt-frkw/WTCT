// Cache name
const CACHE_NAME = 'pwa-sample-caches-v1';
// Cache targets
const urlsToCache = [
    './',
    './index.html',
    './main.html',
    './about.html',
    './licence.html',
    './main.css',
    './img/icon/152x152.png',
    './img/icon/192x192.png',
    './img/icon/512x512.png',
    './js/pdfmake.js',
    './js/pdfmake.js.map',
    './js/pdfmake.min.js',
    './js/pdfmake.min.js.map',
    './js/vfs_fonts.js',
    './js/fonts/Roboto/Roboto-Italic.ttf',
    './js/fonts/Roboto/Roboto-Medium.ttf',
    './js/fonts/Roboto/Roboto-MediumItalic.ttf',
    './js/fonts/Roboto/Regular.ttf',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches
            .match(event.request)
            .then((response) => {
                return response ? response : fetch(event.request);
            })
    );
});