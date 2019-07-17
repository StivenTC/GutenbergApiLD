var Request = require("request");

exports.get = function (req, res) {
  Request.get(" https://gutenberg.justamouse.com/texts/2701", (error, response, body) => {
    if (error) {
      return console.dir(error);
    }
    console.dir(req);
    return res.send(JSON.parse(body));
  });
}

