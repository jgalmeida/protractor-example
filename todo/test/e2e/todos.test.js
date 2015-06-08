describe('Todos', function() {
  var newTodo = element(by.model('todo.description'));
  var submit  = element(by.css("input[type='submit'"));
  var todosList = element.all(by.repeater('todo in todos'));
  var remaining = element(by.binding('remainingCount'));
  var completed = element(by.binding('completedCount'));

  beforeAll(function() {
    require('./helpers/auth').signin('Jony yld');
    browser.get(global.basePath + '#/todos');

    element(by.id('markCompleted')).click();
    element(by.id('clearCompleted')).click();
  });

  it('Adds 2 todos', function() {
    newTodo.sendKeys('First');
    submit.click();
    newTodo.sendKeys('Second');
    submit.click();

    expect(todosList.count()).toBe(2);
    //expect(todosList.get(0).element(by.model('todo.description')).getText()).toBe('First');
    //expect(todosList.get(1).element(by.model('todo.description')).getText()).toBe('Second');

    expect(todosList.get(0).element(by.model('todo.description')).getAttribute('value')).toBe('First');
    expect(todosList.get(1).element(by.model('todo.description')).getAttribute('value')).toBe('Second');

    expect(remaining.getText()).toBe('Remaining 2');
  });

  it('Marks a todo as completed', function() {
    var firstTodo = todosList.get(0);
    firstTodo.element(by.cssContainingText('button', 'C')).click();

    expect(remaining.getText()).toBe('Remaining 1');
    expect(completed.getText()).toBe('Completed 1');
  });

  it('Removes both todos', function() {
    todosList.get(0).element(by.cssContainingText('button', 'X')).click();
    todosList.get(0).element(by.cssContainingText('button', 'X')).click();

    expect(remaining.getText()).toBe('Remaining 0');
    expect(completed.getText()).toBe('Completed 0');
  });

  it('Adds 5 Marks all todos as completed', function() {
    var todos = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    todos.forEach(function(todo) {
      newTodo.sendKeys(todo, protractor.Key.ENTER);
    });

    expect(remaining.getText()).toBe('Remaining 5');
    element(by.id('markCompleted')).click();
    expect(remaining.getText()).toBe('Remaining 0');
    expect(completed.getText()).toBe('Completed 5');
  });

  it('Removes all todos', function() {
    element(by.id('clearCompleted')).click();

    expect(completed.getText()).toBe('Completed 0');
  });

  it('Adds 5 todos, marks first two as completed and filters active todos', function() {
    var todos = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    todos.forEach(function(todo) {
      newTodo.sendKeys(todo, protractor.Key.ENTER);
    });

    todosList.get(0).element(by.cssContainingText('button', 'C')).click();
    todosList.get(1).element(by.cssContainingText('button', 'C')).click();

    expect(remaining.getText()).toBe('Remaining 3');
    expect(completed.getText()).toBe('Completed 2');

    element(by.id('activeFilter')).click();
    expect(todosList.count()).toBe(3);
  });

  it('filters completed todos', function() {
    element(by.id('completedFilter')).click();
    expect(todosList.count()).toBe(2);
  });
});
