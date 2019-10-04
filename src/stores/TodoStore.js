import { observable, computed, action, configure } from 'mobx';
import uuid from 'uuid/v4';

configure({ enforceActions: 'observed' });

class TodoStore {
  @observable todoList = [
    { title: 'First task', id: uuid(), priority: 'low', label: 'all', completed: false },
    { title: 'Second task', id: uuid(), priority: 'high', label: 'all', completed: true },
    { title: 'Third task', id: uuid(), priority: 'low', label: 'all', completed: false },
    { title: 'Forth task', id: uuid(), priority: 'medium', label: 'all', completed: false },
  ];

  @observable todoValue = '';

  @observable todo = 'Hello!';

  @observable isAddNewTodo = false;

  @observable priorityValue = 'medium';

  @observable sortValue = 'all';

  @computed get viewTodoList() {
    const matchesFilter = new RegExp(this.sortValue, 'i');
    return this.todoList.filter(
      ({ priority, label }) => matchesFilter.test(priority) || matchesFilter.test(label),
    );
  }

  @action deleteTodo = id => {
    this.todoList.replace(this.todoList.filter(todo => todo.id !== id));
  };

  @action updateTodoValue = value => {
    this.todoValue = value;
  };

  @action addNewTodo = () => {
    this.todoList.push({
      title: this.todoValue,
      id: uuid(),
      priority: this.priorityValue,
      label: 'all',
      completed: false,
    });
    this.todoValue = '';
  };

  @action updateIsNewActive = () => {
    this.isAddNewTodo = !this.isAddNewTodo;
  };

  @action updatePriorityValue = value => {
    this.priorityValue = value.toLocaleLowerCase();
  };

  @action updateSortValue = value => {
    this.sortValue = value.toLocaleLowerCase();
  };

  @computed get updatedSortValue() {
    return this.sortValue.toLocaleLowerCase();
  }

  @action updateComplited = id => {
    this.todoList.replace(
      this.todoList.filter(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };
}

const todoStore = new TodoStore();

export default todoStore;
