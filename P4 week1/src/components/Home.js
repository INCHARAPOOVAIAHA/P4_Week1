import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="home-container">
      <h1>Welcome to the E-commerce Website</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;