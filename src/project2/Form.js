import React,{useState,useEffect} from 'react';

export default function Form() {
    const [firstname,setFirstname] = useState('');
    const [email,setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstname, email);
    }
    useEffect(() => {
        document.getElementById('output').innerText = firstname;
        document.getElementById('email').innerText = email;
    });
  return (
      <>
          <article className='article'>  
              <form onSubmit={handleSubmit}>
                  <div className='contain'>
              <label htmlFor='firstName'>Name:</label>
                  <input type='text' name='firstName' placeholder='FirstName...' value={firstname} onChange={(e)=>setFirstname(e.target.value) } />
              </div>
                 <div className='contain'>    
              <label htmlFor='emailAddress'>Email:</label>
                  <input type='text' name='emailAddress' placeholder='Email Address...' value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <button className='but1' type='submit' >Submit</button>
                   </form>
          </article>
          <div id='output'></div>
          <span id='email'></span>
    </>
  )
}
