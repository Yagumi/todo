import { observable, computed, action, configure } from 'mobx';
import uuid from 'uuid/v4';

configure({ enforceActions: 'observed' });

class TodoStore {
  @observable todoList = [
    { title: 'First task', id: uuid() },
    { title: 'Second task', id: uuid() },
  ];

  @observable todoValue = '';

  @observable todo = 'Hello!';

  @computed get viewTodoList() {
    return this.todoList.map(item => item);
  }

  @action deleteTodo = id => {
    // eslint-disable-next-line no-console
    console.log(id);
    this.todoList.replace(this.todoList.filter(todo => todo.id !== id));
  };

  @action updateTodoValue = value => {
    this.todoValue = value;
  };

  @action addNewTodo = () => {
    this.todoList.push({ title: this.todoValue, id: uuid() });
    this.todoValue = '';
  };
}

const todoStore = new TodoStore();

export default todoStore;
