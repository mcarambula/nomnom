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

export function manageRecipe({title, content, id}) {
    const params = (id !== null) ? { title, content, id } : {  title, content }
    return axios.post(`${url}/_store`, params)
      .then(response => checkStatus(response))
      .then(res => ({
              title,
              content,
              id: res.data.id
        })
      )
      .catch(function (err) {
          throw new Error(err);
      });
}

export function getRecipes() {
    return axios.post(`${url}/_find`, {})
      .then(response => {
          const { data } = response;
          let newData = {};
          /* Storing the recipes by its own id */
          Object.keys(data).map((recipe, i) => {
              return newData[data[i].id] = { ...data[i] };
          })
          return newData;
      })
      .catch(function (err) {
          throw new Error(err);
      });
}

export function searchRecipe(query, searchBy) {
    return axios.post(`${url}/_find`, { [searchBy] : query })
      .then(response => {
          const { data } = response;
          let newData = {};
          /* Storing the recipes by its own id */
          Object.keys(data).map((recipe, i) => {
              return newData[data[i].id] = { ...data[i] };
          })
          return newData;
      })
      .catch(function (err) {
          throw new Error(err);
      });
}


export function deleteRecipe(recipe) {
    return axios.post(`${url}/_delete`, { id : recipe.id })
      .then(response => {
          const { data } = response;
          if (data.status === 'ack') {
              return recipe;
          }
          return null;
      })
      .catch(function (err) {
          throw new Error(err);
      });
}
