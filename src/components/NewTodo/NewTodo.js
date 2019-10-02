import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../elements/TodoButton';

const NewTodo = ({
  add,
  isAddNewTodo,
  handleIsNewActive,
  handleSubmitForm,
  todoValue,
  handleUpdate,
  handleAddTodo,
}) => {
  if (isAddNewTodo) {
    return (
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={todoValue} onChange={handleUpdate} placeholder="Enter new task" />
        <Button onClick={handleAddTodo}>Add</Button>
      </form>
    );
  }
  return (
    <Button onClick={handleIsNewActive}>
      <img src={add} alt="Add new todo" />
    </Button>
  );
};

NewTodo.propTypes = {
  add: PropTypes.node,
  isAddNewTodo: PropTypes.bool,
  handleIsNewActive: PropTypes.func,
  handleSubmitForm: PropTypes.func,
  todoValue: PropTypes.string,
  handleUpdate: PropTypes.func,
  handleAddTodo: PropTypes.func,
};

export default NewTodo;
