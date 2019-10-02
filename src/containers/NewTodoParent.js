import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import NewTodo from '../components/NewTodo/NewTodo';

const NewTodoParent = inject('todoStore')(
  observer(({ todo, todoStore }) => {
    const handleSubmitForm = event => {
      event.preventDefault();
    };
    const handleUpdate = ({ target: { value } }) => {
      todoStore.updateTodoValue(value);
    };

    const handleAddTodo = () => {
      if (todoStore.todoValue !== '') {
        todoStore.addNewTodo();
      }
    };
    return (
      <NewTodo
        handleSubmitForm={handleSubmitForm}
        todo={todo}
        todoValue={todoStore.todoValue}
        handleUpdate={handleUpdate}
        handleAddTodo={handleAddTodo}
      />
    );
  }),
);

NewTodoParent.propTypes = {
  todo: PropTypes.object,
  todoStore: PropTypes.object,
};

export default NewTodoParent;
