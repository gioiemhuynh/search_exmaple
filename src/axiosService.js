import axios from "axios";


const token = null;



// create axios instance
const service = axios.create({
  headers: token ? {'Authorization': `Bearer ${token}`} : {}
});


export const getApi = (endpoint) => {
  return service.get(endpoint);
}
