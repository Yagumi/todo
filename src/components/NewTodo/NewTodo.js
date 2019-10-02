import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../elements/TodoButton';

const NewTodo = ({ handleSubmitForm, todoValue, handleUpdate, handleAddTodo }) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" value={todoValue} onChange={handleUpdate} placeholder="Enter new task" />
      <Button onClick={handleAddTodo}>Add New Todo</Button>
    </form>
  );
};

NewTodo.propTypes = {
  handleSubmitForm: PropTypes.func,
  todoValue: PropTypes.string,
  handleUpdate: PropTypes.func,
  handleAddTodo: PropTypes.func,
};

export default NewTodo;
