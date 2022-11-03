import React, { useState } from 'react';
const data = [{ id: 1, name: 'peter' }, { id: 2, name: 'john' }, { id: 3, name: 'susan' }, { id: 4, name: 'aana' }];
const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    const handler = (id) => {
        let newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople);
    }
        return (
        <>
            {
                people.map((person) => {
                    const { id, name } = person;
                    return (
                        <div key={id} className='item'>
                            <h1 className='h2'>{name}</h1>
                            <button onClick={()=>handler(id)} style={{ backgroundColor: 'coral', color: 'black' }}>Remove</button>
                        </div>
                    )
                })
            }
            <button className='button2' onClick={() => setPeople([])}>Remove Items</button>
        </>
    )
};
export default UseStateArray;
