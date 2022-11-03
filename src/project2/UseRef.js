import React, { useEffect, useRef } from 'react';

export default function UseRef() {
    const refcontainer = useRef(null);
    const divcontainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        console.log(refcontainer.current);
        refcontainer.current.focus();
    })

  return (
      <>
          <form onSubmit={handleSubmit}>
              <div>
              <label><input type='text' ref={refcontainer} placeholder='input...' /></label>
              <button  type='submit'>Submit</button>
              </div>


          </form>
          <div ref={divcontainer}>Hello world</div>
      
    </>
  )
}
