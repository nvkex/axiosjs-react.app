import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',

});

instance.defaults.headers.common['Authorization'] = 'Auth Token from instance';

export default instance;