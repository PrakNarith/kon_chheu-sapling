import { create } from 'apisauce'

const api = create({
  timeout: 2000,
  baseURL: 'http://localhost:3000/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api
