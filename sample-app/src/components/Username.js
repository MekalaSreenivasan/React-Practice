import { useState } from 'react';

export default function Username({ initialName }) {
    const [name, setName] = useState(initialName); // State for the username
    const [isEditing, setIsEditing] = useState(false); // State to handle edit mode
    const [tempName, setTempName] = useState(initialName); // Temporary state for username while editing
  
    // Function to handle button click (toggle between edit and save)
    const handleButtonClick = () => {
      if (isEditing) {
        setName(tempName); // Save the new name
      }
      setIsEditing(!isEditing); // Toggle edit mode
    };
  
    // Function to handle input change
    const handleInputChange = (event) => {
      setTempName(event.target.value);
    };
  
    return (
      <div>
        {isEditing ? (
          <input
            type="text"
            value={tempName}
            onChange={handleInputChange}
          />
        ) : (
          <span>{name}</span>
        )}
        <button onClick={handleButtonClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    );
}