const proxy = require("http-proxy-middleware");
// all the proxy written here will hit to 5000 port (i.e. node server) instead o 3000 port (i.e. Reacts)

module.exports = function(app) {
  app.use(proxy("/auth/google", { target: "http://localhost:5000/" }));
  app.use(proxy("/auth/facebook", { target: "http://localhost:5000/" }));
  app.use(proxy("/api/*", { target: "http://localhost:5000/" }));
};
