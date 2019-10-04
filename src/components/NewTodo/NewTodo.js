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
  position: absolute;
  bottom: 10px;
  left: 20px;
  width: 100%;
  height: 150px;
`;
const ContainerIsClose = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const ButtonIsClose = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: none;
  background-color: #ebeff5;
  box-shadow: 0px 24px 32px rgba(21, 35, 56, 0.16);
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
