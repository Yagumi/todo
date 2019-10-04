import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import Todo from '../components/Todo';

const TodoContainer = inject('todoStore')(
  observer(({ todo, todoStore }) => {
    const handleDelete = () => {
      todoStore.deleteTodo(todo.id);
    };
    const handleIsCompleted = () => {
      todoStore.updateComplited(todo.id);
    };
    return (
      <Todo
        todo={todo}
        handleDelete={handleDelete}
        handleIsCompleted={handleIsCompleted}
        isCompleted={todo.completed}
      />
    );
  }),
);

Todo.propTypes = {
  todo: PropTypes.object,
  todoStore: PropTypes.object,
};

export default TodoContainer;
