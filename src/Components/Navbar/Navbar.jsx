import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

export default function Navbar({ userData, logout }) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top px-5 ${styles.navBarBg}`}
      >
        <div className="container">
          <div className="w-25">
            <Link className="navbar-brand" to="Home">
              <img
                src="Images/logo.png"
                className={`w-25 ${styles.imgStyle}`}
                alt="game-over"
              />
              Game Over
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${styles.spanProp}`} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="Home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="All">
                    All
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="Platforms"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Platforms
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="Pc">
                        Pc
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Browser">
                        Browser
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="Sort-By"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort-By
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="Release-Date">
                        Release-Date
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Popularity">
                        Popularity
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Alphabetical">
                        Alphabetical
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Relevance">
                        Relevance
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="Categories"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="Racing">
                        Racing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Social">
                        Social
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Shooter">
                        Shooter
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Open-World">
                        Open-World
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Zombie">
                        Zombie
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Fantasy">
                        Fantasy
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Action-rbg">
                        Action-rbg
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Action">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Flight">
                        Flight
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Battle-Royale">
                        Battle-Royale
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              ""
            )}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userData ? (
                <li className="nav-item">
                  <Link className="btn btn-outline-info" onClick={logout}>
                    Log Out
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn btn-outline-info" to="signup">
                      Login-Free
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
