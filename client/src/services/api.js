import axios from 'axios';

class apiClass {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5005/api',
      withCredentials: true,
    });
  }

  signup(credentials) {
    return this.service
      .post('/auth/signup', credentials)
      .then(response => {
        return response.data
      })
      .catch(err => err.response.data);
  }
}

const apiService = new apiClass();

export default apiService;
