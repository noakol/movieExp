import axios from 'axios';
import store from '../storeCreator';
export default class BaseApi {
    constructor({config = {}}) {
        this.store = store;
        this.request = this.request(config);
        this.getMethod = this.getMethod.bind(this);
        this.postMethod = this.postMethod.bind(this);
        this.params = config.apiParams;
    }

    request = config => {
        return axios.create({
            baseURL: config.baseUrl
        })
    }

    getMethod = (url, params) => {
        return this.request
          .get(url, {params: {...params, ...this.params}})
          .then(response => {
            return response.data;
          })
          .catch(error => {
            return error;
          });
      };
    
    postMethod = (url, payload) => {
        return this.request
        .post(url, payload)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        })
    }
}