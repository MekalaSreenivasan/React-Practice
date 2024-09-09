import { useState, useEffect } from "react";

export default function LogoutWrapper({ children, logoutMessage = "You need to log in to view this content.", showWhenLoggedOut = false }) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
  
    useEffect(() => {
      // Check login status from local storage
      const loginStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loginStatus === 'true');
    }, []);
  
    const handleLogout = () => {
      // Perform logout actions here (e.g., clearing authentication tokens)
      localStorage.removeItem('isLoggedIn'); // Clear login status
      setIsLoggedIn(false); // Update state
    };
  
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <button onClick={handleLogout}>Logout</button>
            <div>{children}</div>
          </div>
        ) : (
          <div>
            {showWhenLoggedOut && <p>{logoutMessage}</p>} {/* Render message based on prop */}
          </div>
        )}
      </div>
    );
}