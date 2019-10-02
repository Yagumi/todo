/* eslint-disable no-unused-vars */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => <Container {...props}>{children}</Container>;

const Container = styled.button`
  width: 100px;
  height: 50px;
`;

Button.propTypes = {
  children: PropTypes.any,
};
export default Button;
