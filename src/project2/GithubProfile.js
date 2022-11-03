import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

export default function GithubProfile() {
    const [users,setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        //console.log(users);
    }
    useEffect(() => {
        getUsers();
    }, []);
        
    
    return (
      <>
      <h2> GitHub Users </h2>
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
            </>
  )
}
