import { observable, computed, action, configure } from 'mobx';
import uuid from 'uuid/v4';

configure({ enforceActions: 'observed' });

class TodoStore {
  @observable todoList = [
    {
      title: 'Test task',
      id: uuid(),
      priority: 'low',
      label: 'all',
      completed: false,
      isEdit: false,
    },
  ];

  @observable todoValue = '';

  @observable todo = 'Hello!';

  @observable isAddNewTodo = false;

  @observable priorityValue = 'medium';

  @observable sortValue = 'all';

  @observable editTodoValue = '';

  @computed get viewTodoList() {
    const matchesFilter = new RegExp(this.sortValue, 'i');
    return this.todoList.filter(
      ({ priority, label }) => matchesFilter.test(priority) || matchesFilter.test(label),
    );
  }

  @action editTodo = id => {
    this.todoList.replace(
      this.todoList.map(todo => {
        if (todo.id === id) {
          todo.isEdit = true;
          this.editTodoValue = todo.title;
        }
        return todo;
      }),
    );
  };

  @action deleteTodo = id => {
    this.todoList.replace(this.todoList.filter(todo => todo.id !== id));
  };

  @action updateTodoValue = (value, isEdit) => {
    if (isEdit) {
      this.editTodoValue = value;
    } else {
      this.todoValue = value;
    }
  };

  @action editSave = id => {
    this.todoList.replace(
      this.todoList.map(todo => {
        if (todo.id === id) {
          todo.title = this.editTodoValue;
          todo.isEdit = false;
        }
        return todo;
      }),
    );
  };

  @action editBack = id => {
    this.todoList.replace(
      this.todoList.map(todo => {
        if (todo.id === id) {
          todo.isEdit = false;
          this.editTodoValue = todo.title;
        }
        return todo;
      }),
    );
  };

  @action addNewTodo = () => {
    this.todoList.push({
      title: this.todoValue,
      id: uuid(),
      priority: this.priorityValue,
      label: 'all',
      completed: false,
      isEdit: false,
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

  @computed get activePriorityValue() {
    return this.priorityValue.toLocaleLowerCase();
  }

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
