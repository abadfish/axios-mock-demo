import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 1000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  validateStatus: (status: number) => status >= 200 && status < 300,
})
