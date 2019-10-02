import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import NewTodo from '../components/NewTodo/NewTodo';

import add from '../static/img/add.svg';

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
        todoStore.updateIsNewActive();
      }
    };

    const handleIsNewActive = () => {
      todoStore.updateIsNewActive();
    };
    return (
      <NewTodo
        add={add}
        isAddNewTodo={todoStore.isAddNewTodo}
        handleIsNewActive={handleIsNewActive}
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
