import { Link, Outlet } from "react-router-dom";


const Navbar = ()=>{
    return(
        <>
        <div id="Navbar">
      <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{boxShadow:"0px 1px 9px"}} id="navbar">
  <div class="container-fluid">
    <h1><a class="navbar-brand" href="#">CLIFTON HOTEL AND RESORT </a></h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" className="navbar">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"  >
        <Link to="/" class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </Link>
         <Link to="about"  class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ABOUT</a>
        </Link>
         <Link  to="room"  class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> ROOM </a>
        </Link>
          <Link  to="reservation"  class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ROOM-RESERVATION</a>
        </Link>
         <Link  to="contact"  class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">CONTACT</a>
        </Link>
         <Link to="singup"  class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">SINGUP</a>
        </Link>
         <Link to="login"  class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">LOGIN</a>
        </Link>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
<main><Outlet/></main>
        </>
    )
}

import React from 'react'

function Footer() {
  return (
     <div id="footer">
         <h5>&copy; 2025, Clifton Hotel. All Rights Reserved</h5>
         <h5>Made with &hearts;  by Praveen Choudhary</h5>
        </div>
  )
}
export {Navbar,Footer};