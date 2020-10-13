// Modules
var http = require('http');
var url = require('url');
var fs = require('fs');

// Initiates Server
http.createServer(function (req, res) {
	// Parses requested url
	var q = url.parse(req.url, true);
	filename = "." + q.pathname;
  
	// Load the appropriate webpage
	if (filename == "./") {
		// Load Home
		fs.readFile("index.html", function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			console.log(typeof(data));
			res.write(data);
			return res.end();
		});
	} else if (filename == "./about.html") {
		// Load About
		fs.readFile(filename, function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		});
	} else if (filename == "./contact-me.html") {
		// Load Contact-Me
		fs.readFile(filename, function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		});
	} else {
		// Load 404
		fs.readFile("./404.html", function(err, data) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		});
	}
}).listen(8080);