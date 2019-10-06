import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Button from './TodoButton';
import Image from './Image';
import imgSave from '../static/img/save.svg';
import imgWrong from '../static/img/wrong.svg';

const Form = ({
  children,
  handleSubmit,
  handleAdd,
  value,
  handleBack,
  handleUpdate,
  altFirstImg,
  altSecondImg,
  ...props
}) => (
  <Container onSubmit={handleSubmit} {...props}>
    <input type="text" value={value} onChange={handleUpdate} />
    <Button onClick={handleAdd}>
      <Image path={imgSave} name={altFirstImg} />
    </Button>
    <Button onClick={handleBack}>
      <Image path={imgWrong} name={altSecondImg} />
    </Button>
    {children}
  </Container>
);

const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  & > input {
    width: 200px;
    font-size: 18px;
    line-height: 20px;
    border: none;
    font-family: Arial, sans-serif;
    font-weight: 600;
  }
  & > button {
    padding: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  & > button > img {
    width: 24px;
    height: 24px;
  }
  & > button:first-of-type {
    margin-left: 30px;
  }
  & > button:last-of-type {
    margin-left: 20px;
  }
`;

Form.propTypes = {
  children: PropTypes.any,
  handleSubmit: PropTypes.func,
  handleAdd: PropTypes.func,
  value: PropTypes.string,
  handleBack: PropTypes.func,
  handleUpdate: PropTypes.func,
  imgSave: PropTypes.node,
  imgWrong: PropTypes.node,
  altFirstImg: PropTypes.string,
  altSecondImg: PropTypes.string,
};
export default Form;
