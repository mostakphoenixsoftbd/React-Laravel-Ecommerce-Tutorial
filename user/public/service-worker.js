// public/service-worker.js

const CACHE_NAME = 'my-cache-v1';  // Name of the cache
const urlsToCache = [
    '/',  // List of files to cache
    '/index.html',
    '/static/js/main.chunk.js',
    '/static/js/bundle.js',
    '/static/css/main.css',
    '/static/media/logo.svg',
];

// Install event: Cache resources when the service worker is installed
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);  // Add resources to cache
        })
    );
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);  // Delete old caches
                    }
                })
            );
        })
    );
});

// Fetch event: Serve cached resources or fetch from the network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);  // Use cache if available
        })
    );
});
