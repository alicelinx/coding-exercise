const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://storage.googleapis.com/openhouse-ai-fe-coding-test',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
