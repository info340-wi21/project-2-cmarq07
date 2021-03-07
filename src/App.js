import './App.css';
import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { GameCard } from "./Components/GameCard.js";
import { GamePage } from "./Components/GamePage.js";
import { NavBar } from "./Components/NavBar.js";

import civImage from './covers/civ5_cover.jpg';
import gtaImage from './covers/gtav_cover.jpg';
import csgoImage from './covers/csgo_cover.jfif';
import dotaImage from './covers/dota2_cover.jpg';
import tfImage from './covers/tf2_cover.jpg';
import skyrimImage from './covers/skyrim_cover.png';
import gmodImage from './covers/gmod_cover.jpg';

function App() {
  const [game, setGame] = useState("");
  const games = [
    {title:"Civilization 5", name:"civ5", img:civImage},
    {title:"Grand Theft Auto V", name:"gtav", img:gtaImage},
    {title:"CS:GO", name:"csgo", img:csgoImage},
    {title:"DOTA 2", name:"dota2", img:dotaImage},
    {title:"Team Fortress 2", name:"tf2", img:tfImage},
    {title:"Skyrim", name:"skyrim", img:skyrimImage},
    {title:"Garry's Mod", name:"gmod", img:gmodImage}
  ];

  const handleSetGame = (game) => {
    console.log("setting state to: " + game);
    setGame(game);
  }

  const gameCards = games.map((game) => {
    return (
      <Link to={'/game/' + game.name} key={game.name}>
        <GameCard key={game.name} game={game} handleSetGame={handleSetGame}/>
      </Link>
    )
  });

  return (
    <Switch>
      {/* Home Path */}
      <Route exact path='/'>
        <div>
          <NavBar/>
          <div class="search-container">
            <form method="GET">
              <label for="game_search">Game Search</label>
              <input type="text" name="game" id="game_search"/>
              <button type="submit" id="gameSearchSubmitButton">
                <i class="fas fa-search" aria-label="Search Game"></i>
              </button>
            </form>
          </div>
          <h1 className='trendingTitle'>Top Trending Games</h1>
          <div className='game-container'>
            { gameCards }
          </div>
        </div>
      </Route>
      {/* Game Path */}
      <Route path='/game/:gameName'>
        <GamePage game={game}/>
      </Route>
  </Switch>
  )
}

export default App;
