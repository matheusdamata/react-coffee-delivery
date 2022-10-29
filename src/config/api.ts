import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export default {
  getProducts: async () => {
    let response = await axios.get(`${BASE_URL}/products`)
    return response.data
  }
}