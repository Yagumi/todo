import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import Todo from '../components/Todo';
import edit from '../static/img/edit.svg';
import trash from '../static/img/trash.svg';
import save from '../static/img/save.svg';
import wrong from '../static/img/wrong.svg';

const TodoContainer = inject('todoStore')(
  observer(({ todo, todoStore }) => {
    const handleEdit = () => {
      todoStore.editTodo(todo.id);
    };
    const handleUpdate = ({ target: { value } }) => {
      todoStore.updateTodoValue(value, todo.isEdit);
    };
    const handleSave = e => {
      e.preventDefault();
      todoStore.editSave(todo.id);
    };
    const handleBack = () => {
      todoStore.editBack(todo.id);
    };
    const handleDelete = () => {
      todoStore.deleteTodo(todo.id);
    };
    const handleIsCompleted = () => {
      todoStore.updateComplited(todo.id);
    };

    return (
      <Todo
        todo={todo}
        isEdit={todo.isEdit}
        handleUpdate={handleUpdate}
        handleSave={handleSave}
        handleBack={handleBack}
        editTodoValue={todoStore.editTodoValue}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleIsCompleted={handleIsCompleted}
        isCompleted={todo.completed}
        imgEdit={edit}
        imgDelete={trash}
        imgSave={save}
        imgWrong={wrong}
      />
    );
  }),
);

Todo.propTypes = {
  todo: PropTypes.object,
  todoStore: PropTypes.object,
};

export default TodoContainer;
