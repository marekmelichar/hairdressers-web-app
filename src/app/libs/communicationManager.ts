import axios from 'axios';

export default class CommunicationManager {
  static async get(url: string) {
    const windowUrl = process.env.REACT_APP_ROOT_URL + url;

    const response = await axios.get<any>(windowUrl);

    if (!response.data) {
      return [];
    }

    return response.data;
  }

  static async post(url: string, data: any) {
    const windowUrl = process.env.REACT_APP_ROOT_URL + url;

    const response = await axios.post<any>(windowUrl, data);

    if (!response.data) {
      return [];
    }

    return response.data;
  }
}
