import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <div className="centered col">
      <h1>Login Page</h1>
      <input type="text" placeholder="username" defaultValue="va9iff" /> <br/>
      <input type="password" placeholder="password" defaultValue="999999999" /> <br/>
      <br />
      <button onClick={onLogin}>continue session</button>
    </div>
  );
};

export default Login;
