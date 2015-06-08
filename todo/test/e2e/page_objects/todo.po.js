'use strict';

function TodosPage() {
  var newTodo = element(by.model('todo.description'));
  var todosList = element.all(by.repeater('todo in todos'));
  var remaining = element(by.binding('remainingCount'));
  var completed = element(by.binding('completedCount'));

  function addTodo(description) {
    newTodo.sendKeys(description, protractor.Key.ENTER);
  }

  function getTodo(idx) {
    var todo = todosList.get(idx);

    return {
      //description: todo.element(by.model('todo.description')).getText(),
      description: todo.element(by.model('todo.description')).getAttribute('value'),
      complete:    todo.element(by.cssContainingText('button', 'C')).click,
      remove:      todo.element(by.cssContainingText('button', 'X')).click
    }
  }

  function markAllCompleted() {
    element(by.id('markCompleted')).click();
  }

  function clearCompleted() {
    element(by.id('clearCompleted')).click();
  }

  function filterActive() {
    element(by.id('activeFilter')).click();
  }

  function filterCompleted() {
    element(by.id('completedFilter')).click();
  }

  return {
    addTodo:    addTodo,
    todosCount: todosList.count.bind(todosList),
    getRemaining:  remaining.getText.bind(remaining),
    getCompleted:  completed.getText.bind(completed),
    getTodo:    getTodo,
    markAllCompleted: markAllCompleted,
    clearCompleted: clearCompleted,
    filterActive: filterActive,
    filterCompleted: filterCompleted
  }
}

module.exports = new TodosPage();
