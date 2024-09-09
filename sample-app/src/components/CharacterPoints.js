import React, { useState } from 'react';

export default function CharacterPoint({ characters, totalPoints }) {
    // Initialize state with character points set to 0 and total available points
    const [points, setPoints] = useState(
      characters.reduce((acc, character) => {
        acc[character] = 0;
        return acc;
      }, {})
    );
  
    const [remainingPoints, setRemainingPoints] = useState(totalPoints);
  
    // Function to handle slider change
    const handleSliderChange = (character, value) => {
      const currentPoints = points[character]; // Current points for the character
      const difference = value - currentPoints; // Difference in the new value
  
      if (difference <= remainingPoints) { 
        setPoints((prevPoints) => ({
          ...prevPoints,
          [character]: value, 
        }));
        setRemainingPoints(remainingPoints - difference); // Update remaining points
      }
    };
  
    return (
      <div>
        <span>Remaining Points: {remainingPoints}</span>
        {characters.map((character) => (
          <div key={character}>
            <span>{character}: {points[character]} points</span>
            <input
              type="range"
              min="0"
              max={totalPoints}
              value={points[character]}
              onChange={(e) => handleSliderChange(character, parseInt(e.target.value))}
            />
          </div>
        ))}
      </div>
    );
  };