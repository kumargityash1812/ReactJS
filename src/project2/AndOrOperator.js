import React, { useState,useEffect } from 'react';

export default function AndOrOperator() {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Item/>}
    </>
  );
};
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
   useEffect(() => {
    window.addEventListener('resize', checksize);
  });
  const checksize = () => {
    setSize(window.innerWidth);
  }
  return (
    <>
    <h2>Window</h2>
      <h2>Size:{size} PX</h2>
    </>
  )
}
