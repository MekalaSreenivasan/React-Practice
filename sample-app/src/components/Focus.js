import { useRef } from "react";

export default function Focus() {
    const inputRef1 = useRef(null); // Reference for the first input field
    const inputRef2 = useRef(null); // Reference for the second input field
  
    // Function to handle setting focus to the second input
    const handleSetFocus = () => {
      if (inputRef2.current) {
        inputRef2.current.focus(); // Set focus to the second input field
      }
    };
  
    return (
      <div>
        <input ref={inputRef1} type="text" placeholder="First Input" />
        <input ref={inputRef2} type="text" placeholder="Second Input" />
        <button onClick={handleSetFocus}>Set Focus</button>
      </div>
    );    
}