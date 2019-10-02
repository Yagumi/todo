import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

// import Button from '../elements/TodoButton';

const Todo = ({ todo }) => {
  return (
    <Container>
      <h2>{todo.title}</h2>
      <span>{todo.priority}</span>
      {/* <Button>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button> */}
    </Container>
  );
};

const Container = styled.li`
  padding: 18px 0;
  border-bottom: 1px solid #252a31;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  & > h2 {
    margin: 0;
    word-break: break-all;
    font-size: 18px;
    line-height: 21px;
  }
  & > button:first-of-type {
    margin-left: auto;
  }
`;

Todo.propTypes = {
  todo: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default Todo;
