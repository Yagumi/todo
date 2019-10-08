import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import TodoContainer from '../containers/TodoContainer';

const TodoList = ({ todoList, title }) => {
  return (
    <Container>
      <h2>{title} Tasks:</h2>
      {todoList.map(todo => (
        <TodoContainer todo={todo} key={todo.id} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  padding: 0;
  & > h2:first-letter {
    text-transform: uppercase;
  }
`;

TodoList.propTypes = {
  todoList: PropTypes.array,
  title: PropTypes.string,
};

export default TodoList;
