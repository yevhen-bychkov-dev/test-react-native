const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

export const getListFromServer = async (filter) => {
  return fetch(URL + filter).then(data => data.json());
}
