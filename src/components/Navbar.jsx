import React, { useState } from 'react';
import "../css/Navbar.css"

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='navigation'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className='logo img-fluid' src="./img/logo.png" alt="Municipalidad de Quilicura" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {isLoggedIn && <a className="nav-link" href="#">Features</a>}
              {isLoggedIn && <a className="nav-link" href="#">Pricing</a>}
              {isLoggedIn ? (
                <button className="btn btn-danger" onClick={logout}>Logout</button>
              ) : (
                <button className="btn btn-primary" onClick={login}>Login</button>
              )}
            </div>
          </div> */}
        </div>
      </nav>
      </div>
  );
};

export default Navbar;
