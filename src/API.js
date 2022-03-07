import fetchData from './fetchData'
const API_KEY = '4af0b287';
const SEARCH_MOVIE = `https://www.omdbapi.com/?i=tt3896198`;
const api = {
  searchMovies:param => {
    const {title, type, year, page} = param;
    return fetchData(`${SEARCH_MOVIE}&apikey=${API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
  }
}

export default api;