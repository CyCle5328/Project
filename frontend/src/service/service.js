import axios from 'axios';

const adBaseUrl = 'localhost:8080/api/advertisement';

class adService {
  getAdvertisement() {
    return axios.get(adBaseUrl);
  }
}
export default new adService();
