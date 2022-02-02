var http = require('http');

http.createServer(function(req, res){
	res.end("Olá! Bem vindo ao meu Web Site!");
}).listen(8081);

console.log("O servidor está rodando!");