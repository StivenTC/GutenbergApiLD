var Request = require("request");

exports.get = function (req, res) {
  Request.get(" https://gutenberg.justamouse.com/search/author+eq+'Melville, Herman'", (error, response, body) => {
    if (error) {
      return console.dir(error);
    }
    console.dir(req);
    return res.send(JSON.parse(body));
  });
}

