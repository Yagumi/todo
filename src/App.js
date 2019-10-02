import React from 'react';
import styled from '@emotion/styled';
import FullTodo from './components/FullTodo';

function App() {
  return (
    <Container>
      <FullTodo />
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 100vh;
  margin: 0 auto;
`;

export default App;
