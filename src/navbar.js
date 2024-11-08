import React from "react";
import './nav.css'
function Nav(props){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="logo.png" className="head-img" ></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active ms-5" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-3" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-3" href="#">Stores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-3" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-3" href="#">contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">contact Us</a>
              </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      



    )
}
export default Nav;