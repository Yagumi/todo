import React from 'react';
import { inject, observer } from 'mobx-react';

import Priority from '../elements/Priority';

const PriorityNewParent = inject('todoStore')(
  observer(({ todoStore }) => {
    const updatePriority = ({ target: { value } }) => {
      todoStore.updatePriorityValue(value);
    };
    return <Priority handleClick={updatePriority} />;
  }),
);

export default PriorityNewParent;
