import React from 'react';

const Home = () => {
  const handleAuthenticate = () => {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: "p1z51mwafd5oxeq",
      redirect_uri: "http://localhost:3000/auth/callback",
    });
    window.location.href = `https://www.dropbox.com/oauth2/authorize?${params.toString()}`;
  };

  return (
    <div>
      <h1>Dropbox React App</h1>
      <button onClick={handleAuthenticate}>Авторизоваться через Dropbox</button>
    </div>
  );
};

export default Home;
