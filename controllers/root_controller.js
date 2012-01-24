exports.index = function(req, res) {
	res.send({boot_options : [{id: 1, title: 'test', content: 'Hello World !'}]});
}