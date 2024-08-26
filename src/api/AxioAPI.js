import axios from 'axios';
const AxioAPI = axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/search',
    headers:{
        Authorization:'Bearer EVqXtH1kKfaeAlD7xkv5t4fhbMKdObnM43nFjQbYviqas5dWsNB2p56FPC7Ty1gZ-8uGiNFH9yfu3bc8PjcEYuaknADzRGjslvGJ1DHcM1wSI2SuZj8AkVbvhWuFZnYx'
    }
});

export default AxioAPI;
