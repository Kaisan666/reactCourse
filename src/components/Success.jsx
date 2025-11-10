import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Success = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const accessToken = localStorage.getItem('dropboxAccessToken');
      if (!accessToken) {
        window.location.href = '/';
        return;
      }

      try {
        const response = await axios.post(
          'https://api.dropboxapi.com/2/users/get_current_account',
          null,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error('Ошибка при получении информации о пользователе:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      <h1>Успешная авторизация!</h1>
      {user && (
        <>
          <h2>Информация о пользователе:</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default Success;
