import React from 'react';

export default function Book(props) {
  const { img, title, author } = props.books;
  const Confirm = () => {
    return (
      alert("Do you want to visit the image?")
    );
  }
  return (
    <article onMouseOver={() => { console.log(title); }
}>
      <img onClick={Confirm} src={img} alt='' />
      <h5>{title}</h5>
      <h4>{author}</h4>
    </article>
  );
}
