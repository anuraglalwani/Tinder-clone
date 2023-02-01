import axios from 'axios';
const instance = axios.create({
    // baseURL:"http://localhost:8001"
   // baseURL:"https://tinder-backend-30.herokuapp.com"
   baseURL: "https://tan-gifted-gopher.cyclic.app"
});
export default instance;