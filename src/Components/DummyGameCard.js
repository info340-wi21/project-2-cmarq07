import React from 'react';

export function DummyGameCard(props) {
  return (
    <div>
      <p onClick={() => props.handleSetGame(props.game)}>
        {props.game}
      </p>
    </div>
  )
}
