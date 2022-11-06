import React from 'react';
import { useEffect } from 'react';
import './index1.css';

 const Number = ({ numbers }) => {
  const list = numbers.map((num) => <li value={num}  id="listitem" key={num}>{num}</li>)
  return list
}

export default function Numbers() {
  useEffect(() => {
    let items = document.querySelectorAll("#listitem");
    items.forEach((item) => {
    if ((item.value % 2) === 0) {
      item.style.backgroundColor = "Green";
    }else if(item.value%2 !==0){
      item.style.backgroundColor = "Yellow";
      }
    if (test_prime(item.value)) {
      item.style.backgroundColor = "Red";
      }
    }) 
    //items[0].style.backgroundColor = "Yellow";
})
  const number = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25,26,27,28,29,30,31];
  return (
      <>
          <h2>30 DAYS OF REACT</h2>
      <p>NUMBER GENERATOR</p>
      <ul><Number numbers={number}/></ul>
      
    </>
      
  )
};

function test_prime(n)
{

  if (n===1 || n===0)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
};