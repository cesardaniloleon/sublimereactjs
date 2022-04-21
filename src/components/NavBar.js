import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
      <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <img src="logosublime.png" alt="" width="60" height="60" class="d-inline-block align-text-top"/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav nav-itemx">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Contacto</a>
                </li>
            </ul>
        </div>
      </div>
      <CartWidget/>
  </nav>   
  ) 
}
export default NavBar