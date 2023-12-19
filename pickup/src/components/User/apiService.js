// apiService.js

import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:8000',
});

// 인증 헤더를 설정하는 함수
const setAuthHeader = (token) => {
  if (token) {
    apiService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiService.defaults.headers.common['Authorization'];
  }
};

export { apiService, setAuthHeader };
