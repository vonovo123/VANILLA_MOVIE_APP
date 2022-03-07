import axios from 'axios'
const API_KEY = '4af0b287';
const APPLY = `https://www.omdbapi.com/?i=tt3896198`;
const fetchData = async function(type, param){
  let res = null;
  try{
    if(type === 'apply'){
      const {title, type, year, page} = param;
      res = await axios.get(APPLY + 
        `&apikey=${API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
      )
      return res;
    }
    } catch(error){
      console.log(error)
    }
}
export default fetchData;