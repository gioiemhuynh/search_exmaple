import {getApi} from "./axiosService";

export const getData = (query) => {
  return getApi("https://hn.algolia.com/api/v1/search?query="+query);
}
