import React from 'react';
import Player from './Player';
import { players } from '../player.js';  

const PlayersList = () => {
  const containerStyle = {
    maxWidth: '1200px',margin: '0 auto',padding: '32px 16px'
  };

  const gridStyle = {
    display: 'flex',flexWrap: 'wrap',justifyContent: 'center',gap: '24px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px',textAlign: 'center'
      }}>
        Football Players
      </h1>
      <div style={gridStyle}>
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;