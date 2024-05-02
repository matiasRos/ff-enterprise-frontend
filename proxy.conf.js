const PROXY_CONFIG = [

    {
        context: [
            "/api/",
        ],
      //  "target": "https://ecommerce.freshfoodpyonline.com/",
     "target": "http://127.0.0.1:8000",
        "secure": false,
        "logLevel": "debug",
        "changeOrigin": true,
        "bypass": function (proxyRes, req, res) { }
    },
    {
        context: [
            "/TerosApis/",
            "/alchemy_be/Services/Session/",
        ],
        "target": "https://app.freshfood.com.py",
        "secure": false,
        "logLevel": "debug",
        "changeOrigin": true,
        "bypass": function (proxyRes, req, res) { }
    }
];

module.exports = PROXY_CONFIG;