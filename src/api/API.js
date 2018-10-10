import { create } from 'apisauce'

const api = create({
  timeout: 2000,
  baseURL: 'https://my-json-server.typicode.com/PrakNarith/kon_chheu-sapling/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api
