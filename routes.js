const routes = require('next-routes')();
routes
.add('/trackPages/addLocation', '/trackPages/addLocation')
.add('/trackPages/addProduct', '/trackPages/addProduct')
.add('/trackPages/trackProduct', '/trackPages/trackProduct')
.add('/trackPages/:address', '/trackPages/viewProduct');

module.exports = routes;


