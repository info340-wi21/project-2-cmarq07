import './App.css';
import React, { useState } from 'react';
import { DummyGameCard } from "./Components/DummyGameCard.js";
import { GamePage } from "./Components/GamePage.js";
import { NavBar } from "./Components/NavBar.js";

function App() {
  const [game, setGame] = useState("");
  let games = [
  "civ5",
  "gtav",
  "csgo",
  "dota2",
  "tf2",
  "skyrim",
  "gmod"
  ];

  const handleSetGame = (game) => {
    console.log("setting state to: " + game);
    setGame(game);
  }

  if (game === "") {
    return (
      <div>
        <NavBar/>
        <h2>WOW</h2>
        {games.map(game =>
          <DummyGameCard key={game} game={game} handleSetGame={handleSetGame}/>)}
      </div>
    );
  } else {
    return (
      <GamePage game={game}/>
    )
  }
}

export default App;
