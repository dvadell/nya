module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
        '**/*.js',
        '**/*.html',
        '**/*.css',
        '**/*.jpg',
        '**/*.gif',
        '**/*.png'
  ],
  "swDest": "build/service-worker.js",
  "swSrc": "src/service-worker-policy.js"
};
