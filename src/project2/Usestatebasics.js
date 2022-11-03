import React, { useState } from 'react';

export default function Usestatebasics() {
    let [text, setText] = useState('Random Title');
    const Replacetitle = () => {
        if (text === 'Random Title')
            setText('Hello World')
        else {
            setText('Random Title')
        }
    };
    return (
        <React.Fragment>
            <h2>{text}</h2>
            <button style={{marginLeft:'680px'}} onClick={Replacetitle}>Change Title</button>
        </React.Fragment>
    );
}
