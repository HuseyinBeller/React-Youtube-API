import axios from 'axios';

const KEY = 'AIzaSyBqdGD3ioj9eyXrhtV5A3h9W7dMtDfgj-I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      key: KEY
    }      
})
