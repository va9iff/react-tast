// App.jsx (changes)
import React, { useState } from 'react'
import Login from './Login'
import Home from './Home'

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const handleLogin = () => {
		setIsLoggedIn(true) 
	}
	return (
    <>
      {isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />}
    </>
	)
}

export default App
