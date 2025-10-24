// src/serviceWorkerRegistration.js

// Checks if the environment is localhost (to skip service worker registration in dev)
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname === '127.0.0.1'
);

export function register() {
    if (process.env.NODE_ENV === 'production') {
        // Register the service worker only in production builds
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

        if (isLocalhost) {
            // On localhost, check if there's a valid service worker
            checkValidServiceWorker(swUrl);
        } else {
            // Register the service worker normally
            registerValidSW(swUrl);
        }
    }
}

function registerValidSW(swUrl) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            console.log('Service Worker registered with scope: ', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed: ', error);
        });
}

function checkValidServiceWorker(swUrl) {
    // Check if a service worker exists at the provided URL
    fetch(swUrl)
        .then((response) => {
            if (response.status === 404 || response.type === 'error') {
                // No service worker found, unregister if any
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister();
                });
            } else {
                // Valid service worker found
                registerValidSW(swUrl);
            }
        })
        .catch(() => {
            console.log('No internet connection found. Service Worker not registered.');
        });
}

export function unregister() {
    if (navigator.serviceWorker) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.unregister();
        });
    }
}
