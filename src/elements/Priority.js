/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Priority = ({ handleSubmit, handleClick, title, sortValue, activePriorityValue }) => {
  if (title === undefined) {
    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <Input
            color="high"
            sortValue={sortValue}
            type="button"
            value="High"
            onClick={handleClick}
            activePriorityValue={activePriorityValue}
          />
          <Input
            color="medium"
            sortValue={sortValue}
            type="button"
            value="Medium"
            onClick={handleClick}
            activePriorityValue={activePriorityValue}
          />
          <Input
            color="low"
            sortValue={sortValue}
            type="button"
            value="Low"
            onClick={handleClick}
            activePriorityValue={activePriorityValue}
          />
        </form>
      </Container>
    );
  }
  return (
    <Container>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          color="high"
          sortValue={sortValue}
          type="button"
          value="High"
          onClick={handleClick}
        />
        <Input
          color="medium"
          sortValue={sortValue}
          type="button"
          value="Medium"
          onClick={handleClick}
        />
        <Input color="low" sortValue={sortValue} type="button" value="Low" onClick={handleClick} />
        <Input color="all" sortValue={sortValue} type="button" value="All" onClick={handleClick} />
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  & > h2 {
    margin: 0;
  }
  & > form {
    margin-left: auto;
  }
  & > form > input {
    padding: 10px;
    border: none;
  }
`;
const Input = styled.input`
  border-radius: 10px;
  margin-left: 5px;
  background-color: ${({ theme, ...props }) => {
    const bg = props.sortValue;
    const bgNew = props.activePriorityValue;
    if ((props.color === bg && props.sortValue === 'high')
    || (props.color === bgNew && props.activePriorityValue === 'high')) {
      return theme.colors.high;
    }
    if ((props.color === bg && props.sortValue === 'medium')
    || (props.color === bgNew && props.activePriorityValue === 'medium')) {
      return theme.colors.medium;
    }
    if ((props.color === bg && props.sortValue === 'low')
    || (props.color === bgNew && props.activePriorityValue === 'low')) {
      return theme.colors.low;
    }
    if (props.color === bg && props.sortValue === 'all') {
      return theme.colors.all;
    }
    return '#ebeff5';
  }};
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme, ...props }) => {
    if (props.color === 'high') {
      return theme.colors.high;
    }
    if (props.color === 'medium') {
      return theme.colors.medium;
    }
    if (props.color === 'low') {
      return theme.colors.low;
    }
    return theme.colors.all;
  }};
  }
`;

Priority.propTypes = {
  children: PropTypes.any,
  handleSubmit: PropTypes.func,
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  sortValue: PropTypes.string,
  activePriorityValue: PropTypes.string,
};

export default Priority;
