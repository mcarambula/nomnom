import axios from 'axios';
import { checkStatus } from './parseFetch';

const url = 'http://localhost:8088';

export function getInitialData () {
    return Promise.all([
        getRecipes()
    ]).then(([recipes]) => ({
        recipes
    }));
}

export function addRecipe({title, content}) {
    return axios.post(`${url}/_store`, {
        title,
        content
      })
      .then(response => checkStatus(response))
      .then(res =>res.data)
      .catch(function (error) {
          console.log(error);
      });
}

export function getRecipes() {
    return axios.post(`${url}/_find`, {})
      .then(response => response.data)
      .catch(function (error) {
          console.log(error);
      });
}
