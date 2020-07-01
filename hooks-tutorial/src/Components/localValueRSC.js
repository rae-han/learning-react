import React, { useRef } from 'react';

const localValueRSC = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  }
  const printId = () => {
    console.log(id.current)
  }

  return (
    <div>
      My RSC Component refsample
    </div>
  );
};

export default localValueRSC;