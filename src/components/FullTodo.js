import React from 'react';
import styled from '@emotion/styled';

import NewTodoParent from '../containers/NewTodoParent';
import TodoListParent from '../containers/TodoListParent';
import SortParent from '../containers/SortParent';

const FullTodo = () => {
  return (
    <Container>
      <h1>Simple Todo App</h1>
      <NewTodoParent />
      <SortParent />
      <TodoListParent />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  color: #252a31;
  & > h1 {
    text-align: center;
    color: #252a31;
    text-transform: uppercase;
  }
`;

export default FullTodo;
