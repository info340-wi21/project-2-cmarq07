import React from "react";

export function NavBar() {
  return (
    <header>
      <div className="menu topbar">
        <a href="index.html">
          <h1>Video Game Reviews</h1>
        </a>
      </div>
      <div className="menu lowbar navbar">
        <nav>
          <div className="hamburger-menu">
            <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
          </div>
          <div className="navbar-links">
            <a href="index.html">Games</a>
            <a href="https://store.steampowered.com/" target="_blank">Steam</a>
            <a href="https://github.com/mulhod/steam_reviews" target="_blank">Source</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
