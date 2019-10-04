import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Todo = ({ handleIsCompleted, isCompleted, todo }) => {
  return (
    <Container onClick={handleIsCompleted}>
      <Title isCompleted={isCompleted}>{todo.title}</Title>
      <Priority priority={todo.priority} />
    </Container>
  );
};

const Container = styled.li`
  padding: 18px 0;
  border-bottom: 1px solid #252a31;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
`;
const Title = styled.h2`
  margin: 0;
  word-break: break-all;
  font-size: 18px;
  line-height: 21px;
  text-decoration: ${({ theme, ...props }) => {
    if (props.isCompleted) {
      return 'line-through';
    }
    return 'none';
  }};
  color: ${({ theme, ...props }) => {
    if (props.isCompleted) {
      return '#EBEFF5';
    }
    return '#252A31';
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
  handleDelete: PropTypes.func,
  isCompleted: PropTypes.bool,
};

export default Todo;
