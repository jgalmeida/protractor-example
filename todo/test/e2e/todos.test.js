describe('Todos', function() {
  beforeAll(function() {
    require('./helpers/auth').signin('Jony yld');
    browser.get(global.basePath + '#/todos');

    element(by.id('markCompleted')).click();
    element(by.id('clearCompleted')).click();
  });

  it('Adds 2 todos', function() {
  });

  it('Marks a todo as completed', function() {
  });

  it('Removes both todos', function() {
  });

  it('Adds 5 Marks all todos as completed', function() {
  });

  it('Removes all todos', function() {
  });

  it('Adds 5 todos, marks first two as completed and filters active todos', function() {
  });

  it('filters completed todos', function() {
  });
});
