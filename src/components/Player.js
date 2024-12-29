import React from 'react';

const Player = ({ 
  name = " ", 
  team = "", 
  nationality = "", 
  number = 0, 
  age = 0, 
  imageUrl = "" 
}) => {
  const cardStyle = {
    width: '300px',
    margin: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  };

  return (
    <div style={cardStyle}>
      <div style={{ position: 'relative' }}>
        <img 
          src={imageUrl} 
          alt={name}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
          background: 'white',
          padding: '8px',
          borderBottomLeftRadius: '8px'
        }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>#{number}</span>
        </div>
      </div>
      
      <div style={{ padding: '16px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>{name}</h2>
        <div>
          <p style={{ color: '#666', marginBottom: '4px' }}>
            <span style={{ fontWeight: 'bold' }}>Team:</span> {team}
          </p>
          <p style={{ color: '#666', marginBottom: '4px' }}>
            <span style={{ fontWeight: 'bold' }}>Nationality:</span> {nationality}
          </p>
          <p style={{ color: '#666' }}>
            <span style={{ fontWeight: 'bold' }}>Age:</span> {age} years
          </p>
        </div>
      </div>
    </div>
  );
};

export default Player;