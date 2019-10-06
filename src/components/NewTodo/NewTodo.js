import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PriorityNewParent from '../../containers/PriorityNewParent';
import Button from '../../elements/TodoButton';

const NewTodo = ({
  add,
  isAddNewTodo,
  handleIsNewActive,
  handleSubmitForm,
  todoValue,
  handleUpdate,
  handleAddTodo,
}) => {
  if (isAddNewTodo) {
    return (
      <Container>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            value={todoValue}
            onChange={handleUpdate}
            placeholder="Enter new task"
          />
          <Button onClick={handleAddTodo}>Add</Button>
          <Button onClick={handleIsNewActive}>Close</Button>
        </form>
        <PriorityNewParent />
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

  > form {
    width: 100%;
    display: flex;
  }
  & > form > input {
    pfont-size: 18px;
    line-height: 21px;
  }
  > form > button:first-of-type {
    margin-left: auto;
  }
  > form > button {
  }
`;
const ContainerIsClose = styled.div`
  padding: 0 0 40px 0;
`;

const ButtonIsClose = styled.button`
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
  handleSubmitForm: PropTypes.func,
  todoValue: PropTypes.string,
  handleUpdate: PropTypes.func,
  handleAddTodo: PropTypes.func,
};

export default NewTodo;
