// App.jsx (changes)
import React, { useState } from 'react';
// ... other imports

const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume initial state

const handleLogin = () => {
  // Implement login logic here (e.g., using an authentication service)
  setIsLoggedIn(true); // Update state after successful login
};

const App = () => {
  return (
    <Router>
      {!isLoggedIn && <Route path="/login" element={<Login onLogin={handleLogin} />} />}
      {isLoggedIn && (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/Filter">Filter</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes here */}
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
