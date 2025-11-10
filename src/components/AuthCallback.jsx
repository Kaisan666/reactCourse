import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const code = new URLSearchParams(window.location.search).get('code');
      try {
        const response = await axios.post(
          'https://api.dropboxapi.com/oauth2/token',
          new URLSearchParams({
            code,
            grant_type: 'authorization_code',
            redirect_uri: "http://localhost:3000/auth/callback",
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
              username: "p1z51mwafd5oxeq",
              password: 'fgygfmphn3s9aps', // В реальном приложении используйте переменную окружения
            },
          }
        );
        const accessToken = response.data.access_token;
        localStorage.setItem('dropboxAccessToken', accessToken);
        navigate('/success');
      } catch (error) {
        console.error('Ошибка при получении токена:', error);
        navigate('/');
      }
    };

    fetchAccessToken();
  }, [navigate]);

  return <div>Авторизация...</div>;
};

export default AuthCallback;
