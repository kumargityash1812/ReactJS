import React from 'react';
import { useEffect } from 'react';
import "./index.css";

 const Bgcolor = ({ colors }) => {
  const list = colors.map((col) => <li value={col} id="listitem" key={col}>{col}</li>)
  return list
}

export default function Colors() {
  useEffect(() => {
    let items = document.querySelectorAll("#listitem");
              for ( let i = 0; i < items.length; i++){
              items[i].style.backgroundColor =items[i].innerHTML;
              }
       
})
    const Color = ['#4e417e', '#02dc92', '#dfbaa0', '#d8394e', '#d8594e', '#7c31d3', '#7fcfd2', '#0e5d46'
        , '#d98590', '#7923d7', '#6e5eeb', '#2a176b', '#6c31d7', '#cbae6f',
        '#b6841d', '#62df7d', '#9e4d2c', '#393b73', '#8cface', '#1a4f07', '#045529',
        '#04e754', '#697980', '#018120', '#5bdcc7', '#7010b2', '#c50007',
        '#cfe583', '#cdb58e', '#298b5d', '#58e253', '#a9c3c5'];
  return (
      <>
          <h2>30 DAYS OF REACT</h2>
      <p>Hexadecimal Colors</p>
      <ul><Bgcolor colors={Color}/></ul>
      
    </>
      
  )
};