import React from 'react';

 export const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
                <a class="navbar-brand" href="/">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">{props.title2}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">{props.title3}</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                { props.year}
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">2022</a></li>
            <li><a class="dropdown-item" href="/">2021</a></li>
            <li><a class="dropdown-item" href="/">2020</a></li>
            <li><a class="dropdown-item" href="/">2019</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search for books..." aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> );
}