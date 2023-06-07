import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <Link className="navbar-brand text-white ml-5 pl-5" to="/"><img src='https://cdn.pixabay.com/photo/2014/03/25/15/25/television-296783_1280.png'style={{widt
  :"4rem", height:"2.6rem"}} /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item active">
        <Link className="nav-link" to="/">Tv shows</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Movies">Movies</Link>
      </li>
    </ul>
  </div>
</nav>


    </>
  )
}
