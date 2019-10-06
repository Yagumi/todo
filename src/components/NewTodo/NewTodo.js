import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PriorityNewParent from '../../containers/PriorityNewParent';
import Form from '../../elements/Form';

const NewTodo = ({
  add,
  isAddNewTodo,
  handleIsNewActive,
  handleSubmit,
  todoValue,
  handleUpdate,
  handleAddTodo,
}) => {
  if (isAddNewTodo) {
    return (
      <Container>
        <h1>New Task</h1>
        <PriorityNewParent />
        <Form
          handleSubmit={handleSubmit}
          value={todoValue}
          handleUpdate={handleUpdate}
          handleAdd={handleAddTodo}
          handleBack={handleIsNewActive}
          altFirstImg="Add new task"
          altSecondImg="Cancellation"
        />
      </Container>
    );
  }
  return (
    <ContainerIsClose>
      <ButtonIsClose onClick={handleIsNewActive}>
        <img src={add} alt="Add new todo" />
      </ButtonIsClose>
    </ContainerIsClose>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > div > div > {
    margin-right: auto;
  }
  & > form {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  & > form > input {
    font-size: 18px;
    line-height: 21px;
    border-bottom: 1px solid black;
    width: 240px;
  }
  > form > button:first-of-type {
    margin-left: auto;
  }
  > form > button {
  }
`;
const ContainerIsClose = styled.div`
  display: flex;
`;

const ButtonIsClose = styled.button`
  padding: 0;
  margin-left: auto;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: none;
  background-color: #b678ff;
  cursor: pointer;
`;

NewTodo.propTypes = {
  add: PropTypes.node,
  isAddNewTodo: PropTypes.bool,
  handleIsNewActive: PropTypes.func,
  handleSubmit: PropTypes.func,
  todoValue: PropTypes.string,
  handleUpdate: PropTypes.func,
  handleAddTodo: PropTypes.func,
};

export default NewTodo;
