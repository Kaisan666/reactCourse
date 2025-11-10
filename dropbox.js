const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

// 1. Настройка
const DROPBOX_APP_KEY = process.env.DROPBOX_APP_KEY;
const DROPBOX_APP_SECRET = process.env.DROPBOX_APP_SECRET;
const REDIRECT_URI = 'http://localhost:3000/auth/callback';
const ACCESS_TOKEN = 'ваш_access_token'; // Замените на реальный токен

// 2. Авторизация
function getAuthUrl() {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: DROPBOX_APP_KEY,
    redirect_uri: REDIRECT_URI,
  });
  return `https://www.dropbox.com/oauth2/authorize?${params.toString()}`;
}

async function getAccessToken(code) {
  try {
    const response = await axios.post(
      'https://api.dropboxapi.com/oauth2/token',
      null,
      {
        params: {
          code,
          grant_type: 'authorization_code',
          redirect_uri: REDIRECT_URI,
        },
        auth: {
          username: DROPBOX_APP_KEY,
          password: DROPBOX_APP_SECRET,
        },
      }
    );
    console.log('Access Token:', response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error('Ошибка при получении токена:', error.response?.data || error.message);
  }
}

// 3. Основные функции
async function getUserInfo() {
  try {
    const response = await axios.post(
      'https://api.dropboxapi.com/2/users/get_current_account',
      null,
      { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
    );
    console.log('Информация о пользователе:', response.data);
  } catch (error) {
    console.error('Ошибка:', error.response?.data || error.message);
  }
}

async function getSpaceUsage() {
  try {
    const response = await axios.post(
      'https://api.dropboxapi.com/2/users/get_space_usage',
      null,
      { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
    );
    console.log('Использование хранилища:', response.data);
  } catch (error) {
    console.error('Ошибка:', error.response?.data || error.message);
  }
}

async function createFolder(path) {
  try {
    const response = await axios.post(
      'https://api.dropboxapi.com/2/files/create_folder_v2',
      { path },
      { headers: { Authorization: `Bearer ${ACCESS_TOKEN}`, 'Content-Type': 'application/json' } }
    );
    console.log('Папка создана:', response.data);
  } catch (error) {
    console.error('Ошибка:', error.response?.data || error.message);
  }
}

async function uploadFile(localPath, dropboxPath) {
  try {
    const fileContent = fs.readFileSync(localPath);
    const response = await axios.post(
      'https://content.dropboxapi.com/2/files/upload',
      fileContent,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Dropbox-API-Arg': JSON.stringify({ path: dropboxPath }),
          'Content-Type': 'application/octet-stream',
        },
      }
    );
    console.log('Файл загружен:', response.data);
  } catch (error) {
    console.error('Ошибка:', error.response?.data || error.message);
  }
}

// 4. Пример использования
(async () => {
  // Для авторизации:
  // 1. Откройте в браузере: console.log(getAuthUrl());
  // 2. После авторизации получите код из URL и вызовите: await getAccessToken('код_из_редиректа');

  // Примеры вызовов:
  await getUserInfo();
  await getSpaceUsage();
  await createFolder('/test_folder');
  await uploadFile('./example.txt', '/example.txt');
})();
