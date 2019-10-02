import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import TodoList from '../components/TodoList';

const TodoListParent = inject('todoStore')(
  observer(({ todoStore }) => {
    return <TodoList todoList={todoStore.viewTodoList} />;
  }),
);

TodoListParent.propTypes = {
  todoStore: PropTypes.object,
};

export default TodoListParent;
