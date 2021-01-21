import axios from 'axios'
import { API_KEY, BASE_API_URL } from '../config'

const client = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'x-api-key': API_KEY
  }
})

export default client
