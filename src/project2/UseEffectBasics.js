import React, { useState,useEffect} from 'react';

export default function UseEffectBasics() {
    const [value, setValue] = useState(0);
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        if (value >= 1) {
            document.title = `New Chats(${value})`
        }
    }, [value]);
    useEffect(() => {
        window.addEventListener('resize', checkWidth);
    })
    const checkWidth = () => {
        setSize(window.innerWidth);
    }

  return (
      <>
          <h2>{value}</h2>
          <button style={{marginLeft:'680px'}} onClick={() => setValue(value + 1)}>Click Me</button>
          <h2>Window</h2>
          <h2>{size} PX</h2>
      </>
      
  )
}
