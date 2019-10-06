import React from 'react';
import { inject, observer } from 'mobx-react';

import Priority from '../elements/Priority';

const SortParent = inject('todoStore')(
  observer(({ todoStore }) => {
    const handleSortValue = ({ target: { value } }) => {
      todoStore.updateSortValue(value);
    };
    const handleSubmit = event => {
      event.preventDefault();
    };
    return (
      <Priority
        handleSubmit={handleSubmit}
        handleClick={handleSortValue}
        titleName="Filter by:"
        sortValue={todoStore.updatedSortValue}
      />
    );
  }),
);

export default SortParent;
