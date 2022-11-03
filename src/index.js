import React from 'react';
import ReactDom from 'react-dom/client';
import Booklist from './project1/booklist';
import './project1/index.css'

 function Index() {
  return (
    <>
      <Booklist/>
      </>
  )
 }

const Root = ReactDom.createRoot(document.getElementById('root'));
Root.render(<Index />);




