import React from 'react';

import ClassState from './1ClassState.js'
import MultipleValues from  './2MultipleValues.js';

import FunctionUseState from './3FunctionUseState.js'

const StateIndex = () => {
  return (
    <div>
      <ClassState /> <hr />
      <MultipleValues /> <hr />
      <FunctionUseState /> <hr />
    </div>
  );
};

export default StateIndex;