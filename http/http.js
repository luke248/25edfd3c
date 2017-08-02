var http = require('http');


var requestCounter = 0;
var server = http.createServer(function (request, response) {
	requestCounter ++;
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.write('{ "request": ' + requestCounter + ' }');
	response.end();
});

server.listen(80);
