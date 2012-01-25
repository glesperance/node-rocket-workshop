exports.show = function(req, res) {
  res.send({id: 1, title: 'test', content: 'Hello World !'});
};

exports.new = function(req, res) {
  res.send({});
};

exports.destroy = function(req, res) {
  res.send({});
};