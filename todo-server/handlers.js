module.exports = {
  get: get,
  post: post,
  complete: complete,
  del: del,
  auth: auth
}

var todos = [];

function get(req, res, next) {
  var filteredTodos = todos.filter(function(todo) {
    return (todo.status === req.query.status) || !req.query.status;
  })

  res.send(filteredTodos)
}

function post(req, res, next) {
  var todo = req.params;
  todo.id = todos.length;
  todo.status = 'active';
  todos.push(todo);

  res.send(todo);
}

function complete(req, res, next) {
  var todo = todos.filter(function(todo) {
    return todo.id == req.params.id;
  })[0];
  todo.status = 'completed';

  res.send(todo);
}

function del(req, res, next) {
  for(var i = 0; i < todos.length; i++) {
    if(todos[i].id == req.params.id) {
      todos.splice(i, 1);
      break;
    }
  }

  res.send();
}

function auth(req, res, next) {
  res.send({username: req.params.username, token: 'magictoken'});
}
