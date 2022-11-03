import React, { useState } from 'react';

export default function UseStateCounter() {
    const [value, setvalue] = useState(0);
    const [text, setText] = useState('State Counter');
    const reset = () => {
        setvalue(0);
        setText('State Counter Reset')
    }
    const decrease = () => {
        setvalue(value - 1);
        setText('State Counter Decreasing');
    }
    const increase = () => {
        setvalue(value + 1);
        setText('State Counter Increasing');
        }
        
  return (
      <div style={{ margin: '4rem 0' }}>
          <h2>{ text}</h2>
          <h2 style={{color:'green'}}>{value}</h2>
          <div className='Button'>
          <button style={{backgroundColor:'red',border:'none'}} onClick={decrease} >Decrease</button>
          <button style={{border:'none'}} onClick={reset}>Reset</button>
              <button style={{
                  backgroundColor: 'green',border:'none'}} onClick={increase}>Increase</button>
          </div>
          </div>
  )
}
