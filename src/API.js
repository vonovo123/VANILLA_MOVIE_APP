import fetchData from './fetchData'
const API_KEY = '4af0b287';
const SEARCH_MOVIE = `https://www.omdbapi.com/?`;
const api = {
  searchMovies:param => {
    try {
      const {title, type, year, page} = param;
      return fetchData(`${SEARCH_MOVIE}&apikey=${API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
    } catch(error){
      throw error;
    }
  },
  searchMovieWithId: param => {
    try {
      const {id} = param;
      return fetchData(`${SEARCH_MOVIE}&apikey=${API_KEY}&i=${id}`);
    } catch(error){
      throw error
    }
  }
}

export default api;