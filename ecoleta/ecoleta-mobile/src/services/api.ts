import axios from 'axios'

export const internalAPI = axios.create({
  baseURL: 'http://192.168.15.6:3333',
})
