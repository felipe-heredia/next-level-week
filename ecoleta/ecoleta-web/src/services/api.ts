import axios from 'axios'

export const internal = axios.create({
  baseURL: 'https://felipesuri-ecoleta.herokuapp.com',
})

export const ibge = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1',
})
