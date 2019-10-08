import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Button from '../elements/TodoButton';
import FormParent from '../containers/FormParent';

const Todo = ({
  handleIsCompleted,
  isEdit,
  editTodoValue,
  handleUpdate,
  handleSave,
  handleBack,
  handleEdit,
  handleDelete,
  isCompleted,
  todo,
  imgDelete,
  imgEdit,
}) => {
  if (isEdit) {
    return (
      <Container>
        <FormParent
          handleSubmit={handleSave}
          value={editTodoValue}
          handleUpdate={handleUpdate}
          handleAdd={handleSave}
          handleBack={handleBack}
          altFirstImg="Save new changes"
          altSecondImg="Cancellation of changes"
        />
        <Priority priority={todo.priority} />
      </Container>
    );
  }
  return (
    <Container>
      <Title isCompleted={isCompleted} onClick={handleIsCompleted}>
        {todo.title}
      </Title>
      <Button onClick={handleEdit}>
        <img src={imgEdit} alt="edit task" />
      </Button>
      <Button onClick={handleDelete}>
        <img src={imgDelete} alt="delete task" />
      </Button>
      <Priority priority={todo.priority} />
    </Container>
  );
};

const Container = styled.li`
  padding: 18px 0;
  border-bottom: 1px solid #252a31;
  list-style-type: none;
  display: flex;
  align-items: center;
  & > button {
    padding: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  & > button > img {
    width: 24px;
    height: 24px;
  }
  & > button:first-of-type {
    margin-left: 30px;
  }
  & > button:last-of-type {
    margin-left: 20px;
  }
`;
const Title = styled.h2`
  margin: 0;
  width: 200px;
  word-break: break-all;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  text-decoration: ${({ theme, ...props }) => {
    if (props.isCompleted) {
      return 'line-through';
    }
    return 'none';
  }};
`;
const Priority = styled.span`
  margin-left: auto;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme, ...props }) => {
    if (props.priority === 'high') {
      return theme.colors.red;
    }
    if (props.priority === 'medium') {
      return theme.colors.green;
    }
    return theme.colors.yellow;
  }};
`;

Todo.propTypes = {
  todo: PropTypes.object,
  handleIsCompleted: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  isCompleted: PropTypes.bool,
  imgDelete: PropTypes.node,
  isEdit: PropTypes.bool,
  editTodoValue: PropTypes.string,
  handleUpdate: PropTypes.bool,
  handleSave: PropTypes.func,
  handleBack: PropTypes.func,
  imgEdit: PropTypes.node,
};

export default Todo;
