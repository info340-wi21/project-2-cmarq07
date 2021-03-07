import React from 'react';

export function GameCard(props) {
  let game = props.game;
  let gameTitle = game.title;
  let gameImg = game.img;

  return (
      <div className="gameCard">
        <div>
          <h2>{gameTitle}</h2>
          <img src={gameImg} alt={gameTitle + ' Image'}/>
        </div>
      </div>
  )
}
