import React from 'react';
import styled from '@emotion/styled';

import NewTodoParent from '../containers/NewTodoParent';
import TodoListParent from '../containers/TodoListParent';

const FullTodo = () => {
  return (
    <Container>
      <NewTodoParent />
      <TodoListParent />
    </Container>
  );
};

const Container = styled.div`
  width: 1440px;
  height: 100vh;
  background-color: #f2f2f2;
  color: #252a31;
`;

export default FullTodo;
