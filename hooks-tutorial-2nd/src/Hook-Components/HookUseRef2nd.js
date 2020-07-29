import React, { useRef } from 'react';

const HookUseRef2nd = () => {
  const id = useRef(1);

  const setId = (n) => {
    id.current = n
  }

  const printId = () => {
    console.log(id.current)
  }

  (()=> {
    setId(2);
    printId();
  })();

  return (
    <div>
      <div>
        
      </div>
    </div>
  );
};

export default HookUseRef2nd;