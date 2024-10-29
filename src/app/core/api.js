import axios from 'axios';

class ApiRequest {
  constructor() {
    if (!ApiRequest.instance) {
      this.api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
      });
      ApiRequest.instance = this;
    }
    return ApiRequest.instance;
  }

  async get(url, config) {
    try {
      const response = await this.api.get(url, config);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }

  async post(url, data, config) {
    console.log(config);
    try {
      const response = await this.api.post(url, data, config);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }

  async put(url, data, config) {
    try {
      const response = await this.api.put(url, data, config);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }

  async delete(url, config) {
    try {
      const response = await this.api.delete(url, config);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
}

const instance = new ApiRequest();
Object.freeze(instance);
export default instance;
