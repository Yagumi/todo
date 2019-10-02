import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import TodoContainer from '../containers/TodoContainer';

const TodoList = ({ todoList }) => {
  return (
    <Container>
      {todoList.map(todo => (
        <TodoContainer todo={todo} key={todo.id} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  padding: 0;
`;

TodoList.propTypes = {
  todoList: PropTypes.array,
};

export default TodoList;
