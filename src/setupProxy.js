const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
  target: 'https://storage.googleapis.com/openhouse-ai-fe-coding-test',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
};

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware(proxy)
  );
};
