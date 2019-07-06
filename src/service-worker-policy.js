importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([]);

const bgSyncPlugin = new workbox.backgroundSync.Plugin('myQueueName', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});


workbox.routing.registerRoute(
    /.(css|js)/, 
    new workbox.strategies.CacheFirst(),
    'GET'
);
workbox.routing.registerRoute(
    /^https:\/\/stackpath.bootstrapcdn.com\/*/, 
    new workbox.strategies.StaleWhileRevalidate({ "cacheName":"fontawesome", plugins: [] }), 
    'GET'
);
workbox.routing.registerRoute(
    /\/api\.*/, 
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    }), 
    'POST'
);

