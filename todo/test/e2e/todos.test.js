describe('Todos', function() {
  var todoPage = require('./page_objects/todo.po');

  beforeAll(function() {
    require('./helpers/auth').signin('Jony yld');
    browser.get(global.basePath + '#/todos');

    element(by.id('markCompleted')).click();
    element(by.id('clearCompleted')).click();
  });

  it('Adds 2 todos', function() {
    todoPage.addTodo('First');
    todoPage.addTodo('Second');

    expect(todoPage.todosCount()).toBe(2);
    expect(todoPage.getTodo(0).description).toBe('First');
    expect(todoPage.getTodo(1).description).toBe('Second');
    expect(todoPage.getRemaining()).toBe('Remaining 2');
  });

  it('Marks a todo as completed', function() {
    todoPage.getTodo(0).complete();

    expect(todoPage.getRemaining()).toBe('Remaining 1');
    expect(todoPage.getCompleted()).toBe('Completed 1');
  });

  it('Removes both todos', function() {
    todoPage.getTodo(0).remove();
    todoPage.getTodo(0).remove();

    expect(todoPage.getRemaining()).toBe('Remaining 0');
    expect(todoPage.getCompleted()).toBe('Completed 0');
  });

  it('Adds 5 Marks all todos as completed', function() {
    var todos = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    todos.forEach(todoPage.addTodo);

    todoPage.markAllCompleted();

    expect(todoPage.getRemaining()).toBe('Remaining 0');
    expect(todoPage.getCompleted()).toBe('Completed 5');
  });

  it('Removes all todos', function() {
    todoPage.clearCompleted();

    expect(todoPage.getCompleted()).toBe('Completed 0');
  });

  it('Adds 5 todos, marks first two as completed and filters active todos', function() {
    var todos = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    todos.forEach(todoPage.addTodo);

    todoPage.getTodo(0).complete();
    todoPage.getTodo(1).complete();

    expect(todoPage.getRemaining()).toBe('Remaining 3');
    expect(todoPage.getCompleted()).toBe('Completed 2');

    todoPage.filterActive();

    expect(todoPage.todosCount()).toBe(3);
  });

  it('filters completed todos', function() {
    todoPage.filterCompleted();

    expect(todoPage.todosCount()).toBe(2);
  });
});
