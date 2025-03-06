const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AXGGkH2ncU-QhvTB_ItwNrrCeLmSYQ3LpW5yuvEV4CB239oQeuRHunwicqRPjmgouh_bEnXI-aOOC0pN",
  client_secret: "EFzSX7-t944Q22QVdWN3pD1zMbqg-dJJPNPz0bEU9bX9ZGLKh8asBXnVfMn65tu7N8kPKSGFIREvelMX",
});

module.exports = paypal;
