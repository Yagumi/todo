import React from 'react';
import PropTypes from 'prop-types';

import TodoContainer from '../containers/TodoContainer';

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map(todo => (
        <TodoContainer todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
};

export default TodoList;
