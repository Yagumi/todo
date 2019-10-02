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
  padding: 20px;
  color: #252a31;
`;

export default FullTodo;
