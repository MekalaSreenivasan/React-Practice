import { useState } from "react";

export default function ToggleMessage() {
    const [isVisible, setIsVisible] = useState(false); // State to manage message visibility

    // Function to handle button click and toggle visibility
    const handleToggle = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div>
        <button onClick={handleToggle}>
          {isVisible ? 'Hide' : 'Show'}
        </button>
        {isVisible && <p>Secret message!!!</p>}
      </div>
    );
}