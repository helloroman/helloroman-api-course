import axios from 'axios';

console.log('PROXY_API', process.env.REACT_APP_PROXY_API);
export const api = axios.create({
  baseURL: process.env.REACT_APP_PROXY_API || 'http://localhost:8000/',
})

export const endpoints = {
  users: 'users/'
}
