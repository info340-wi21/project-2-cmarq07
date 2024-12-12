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
          <div className="navbar-links">
            <a href="/">Games</a>
            <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer">Steam</a>
            <a href="https://github.com/mulhod/steam_reviews" target="_blank" rel="noreferrer">Source</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
