import axios from 'axios';

export default class CommunicationManager {
  static async get(url: string) {
    const rootURL = process.env.REACT_APP_ROOT_URL + url;

    const response = await axios.get<any>(rootURL);

    if (!response.data) {
      return [];
    }

    return response.data;
  }

  static async post(url: string, data: any) {
    const rootURL = process.env.REACT_APP_ROOT_URL + url;

    const response = await axios.post<any>(rootURL, data);

    if (!response.data) {
      return [];
    }

    return response.data;
  }
  
  static async put(url: string, data: any) {
    const rootURL = process.env.REACT_APP_ROOT_URL + url;

    const response = await axios.put<any>(rootURL, data);

    if (!response.data) {
      return [];
    }

    return response.data;
  }

  static async delete(url: string, data: any) {
    const rootURL = process.env.REACT_APP_ROOT_URL + url;

    const response = await axios.delete<any>(rootURL, data);

    if (!response.data) {
      return [];
    }

    return response.data;
  }
}
