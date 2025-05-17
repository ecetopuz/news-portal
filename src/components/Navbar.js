import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm"
    >

      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">HABER BÜLTEN</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link" href="#">SON DAKİKA</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="gundemDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                GÜNDEM
              </a>
              <ul className="dropdown-menu" aria-labelledby="gundemDropdown">
                <li><a className="dropdown-item" href="#">Siyaset</a></li>
                <li><a className="dropdown-item" href="#">Ekonomi</a></li>
                <li><a className="dropdown-item" href="#">Eğitim</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="ekonomiDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                EKONOMİ
              </a>
              <ul className="dropdown-menu" aria-labelledby="ekonomiDropdown">
                <li><a className="dropdown-item" href="#">Döviz</a></li>
                <li><a className="dropdown-item" href="#">Altın</a></li>
                <li><a className="dropdown-item" href="#">Borsa</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="#">DÜNYA</a></li>
            <li className="nav-item"><a className="nav-link" href="#">SPOR</a></li>
            <li className="nav-item"><a className="nav-link" href="#">MAGAZİN</a></li>
            <li className="nav-item"><a className="nav-link" href="#">FİNANS</a></li>
            <li className="nav-item"><a className="nav-link" href="#">RESMİ İLANLAR</a></li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
