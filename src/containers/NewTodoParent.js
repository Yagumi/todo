import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import NewTodo from '../components/NewTodo/NewTodo';

import add from '../static/img/add.svg';

const NewTodoParent = inject('todoStore')(
  observer(({ todo, todoStore }) => {
    const handleUpdate = ({ target: { value } }) => {
      todoStore.updateTodoValue(value);
    };

    const handleAddTodo = e => {
      if (todoStore.todoValue !== '') {
        e.preventDefault();
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
        handleSubmit={handleAddTodo}
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
