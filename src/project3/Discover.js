import React, { useState, useEffect } from 'react';
import { genres } from './Genres';


export default function Discover() {
  const logo = 'pop';
  const [users, setUser] = useState([]);
  const url = 'https://api.github.com/users';
  const getUsers = async () => {
    let response = await fetch(url);
    const users = await response.json();
    setUser(users);
    console.log(users);
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className='flex1'>
      <div className='heading1'><h2>Discover {logo}</h2></div>
      <div><select className='select' onChange={(e)=>{}} value="" >
        {
          genres.map((genre) => 
            <option key={genre.value} value={genre.value}>{genre.title}</option>
          )
      }
      
      
      </select></div>
         <ul className='users'>
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user;
                    return (
                        <li key={id}>
                            <img className='img' src={avatar_url} alt={login} />
                            <div>
                                <h5>{login}</h5>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    )

                    })
              }      
            </ul>
      </div>
  )
}
