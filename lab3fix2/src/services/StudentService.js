import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

console.log(
  apiClient.get('https://dv-student-backend-2019.appspot.com/students')
)
export default {
  getEvents() {
    return apiClient.get('https://dv-student-backend-2019.appspot.com/students')
  }
}
