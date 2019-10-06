import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import TodoList from '../components/TodoList';

const TodoListParent = inject('todoStore')(
  observer(({ todoStore }) => {
    const updateTitle = () => {
      if (todoStore.updatedSortValue === 'all') {
        return 'all';
      }
      return `${todoStore.updatedSortValue} Priority `;
    };
    return <TodoList todoList={todoStore.viewTodoList} title={updateTitle()} />;
  }),
);

TodoListParent.propTypes = {
  todoStore: PropTypes.object,
};

export default TodoListParent;
