import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Button from '../elements/TodoButton';

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
  imgSave,
  imgWrong,
}) => {
  if (isEdit) {
    return (
      <Container>
        <form onSubmit={handleSave}>
          <input type="text" value={editTodoValue} onChange={handleUpdate} />
          <Button onClick={handleSave}>
            <img src={imgSave} alt="save changes of task" />
          </Button>
          <Button onClick={handleBack}>
            <img src={imgWrong} alt="wrong task" />
          </Button>
        </form>
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
  & > form {
    width: 100%;
    display: flex;
    align-items: center;
  }
  & > form > input {
    width: 200px;
    font-size: 18px;
    line-height: 20px;
    border: none;
    font-family: Arial, sans-serif;
    font-weight: 600;
  }
  & > button,
  & > form > button {
    padding: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  & > button > img,
  & > form > button > img {
    width: 24px;
    height: 24px;
  }
  & > button:first-of-type,
  & > form > button:first-of-type {
    margin-left: 30px;
  }
  & > button:last-of-type,
  & > form > button:last-of-type {
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
      return theme.colors.high;
    }
    if (props.priority === 'medium') {
      return theme.colors.medium;
    }
    return theme.colors.low;
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
  imgSave: PropTypes.node,
  imgWrong: PropTypes.node,
};

export default Todo;
