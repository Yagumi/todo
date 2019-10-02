import React from 'react';
import PropTypes from 'prop-types';

import Button from '../elements/TodoButton';

const Todo = ({ todo, handleDelete }) => {
  return (
    <li>
      <h2>{todo.title}</h2>
      <Button>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default Todo;
