var Request = require("request");
var JSONLD = require("./controllers/parseJsonLD");
exports.get = function (req, res) {
  Request.get(" https://gutenberg.justamouse.com/texts/" + req.params.id, (error, response, body) => {
    if (error) {
      return console.dir(error);
    }
    console.dir(req);
    return res.send(JSONLD.parse((body)));
  });
}

exports.example = function (req, res) {
  Request.get(" https://gutenberg.justamouse.com/texts/300", (error, response, body) => {
    if (error) {
      return console.dir(error);
    }
    console.dir(req);
    return res.send(JSON.parse(body));
  });
}


