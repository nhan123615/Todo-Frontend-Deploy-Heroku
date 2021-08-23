import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  // get(url) {
  //   return this.instance.get(url);
  // }

  get(url, headers) {
    return this.instance.get(url, headers);
  }

  // post(url, body) {
  //   return this.instance.post(url, body);
  // }

  post(url, body, headers) {
    return this.instance.post(url, body, headers);
  }

  // put(url, body) {
  //   return this.instance.put(url, body);
  // }

  put(url, body, headers) {
    return this.instance.put(url, body, headers);
  }

  // delete(url) {
  //   return this.instance.delete(url);
  // }

  delete(url, headers) {
    return this.instance.delete(url, headers);
  }
}

export default new AxiosService();
