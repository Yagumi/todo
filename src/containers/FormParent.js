import React from 'react';

import Form from '../components/Form';

const FormParent = ({ ...props }) => {
  return <Form {...props} />;
};

export default FormParent;
