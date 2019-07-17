var text = require('./texts')
var search = require('./search')


var router = function (app) {
  app.get("/", text.get);
  app.get("/search", search.get);
}

module.exports = router;