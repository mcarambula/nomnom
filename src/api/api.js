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
      .then(res => ({
              title,
              content,
              id: res.data.id
        })
      )
      .catch(function (error) {
          console.log(error);
      });
}

export function getRecipes() {
    return axios.post(`${url}/_find`, {})
      .then(response => {
          const { data } = response;
          let newData = {};
          /* Storing the recipes by its own id */
          Object.keys(data).map((recipe, i) => {
              newData[data[i].id] = { ...data[i] };
          })
          return newData;
      })
      .catch(function (error) {
          console.log(error);
      });
}
