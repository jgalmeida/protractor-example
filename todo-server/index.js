var restify = require('restify');

var handlers = require('./handlers');

var server = restify.createServer({
    name: 'todo-server',
    version: '1.0.0'
});

server.use(restify.CORS());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/todos', handlers.get);
server.post('/todos', handlers.post);
server.put('/todos/:id/complete', handlers.complete);
server.del('/todos/:id', handlers.del);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
