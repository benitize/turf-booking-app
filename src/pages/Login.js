import './Login.css';
import React, { useState } from 'react';

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="login-container">
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form>
        <input type="text" placeholder="Username" required />
        {isSignup && <input type="email" placeholder="Email" required />}
        <input type="password" placeholder="Password" required />
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
      </form>
      <div
        className="toggle-link"
        onClick={() => setIsSignup(!isSignup)}
      >
        {isSignup
          ? 'Already have an account? Login'
          : "Don't have an account? Sign Up"}
      </div>
    </div>
  );
}

export default Login;