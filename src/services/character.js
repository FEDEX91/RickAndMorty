import axios from "axios"

export async function getData(query) {

  let url = 'https://rickandmortyapi.com/api/character/';

  if (query !== '') {
    url += `?name=${query}`
  }

  return await axios.get(url);
}