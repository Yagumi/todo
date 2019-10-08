import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ children, path, name, ...props }) => <img src={path} alt={name} {...props} />;
Image.propTypes = {
  children: PropTypes.any,
  path: PropTypes.node,
  name: PropTypes.string,
};

export default Image;
