import axios from 'axios'
const fetchData = async function(url){
  try{
    const res = await axios.get(url);
    return res;
    } catch(error){
      throw(error)
    }
}
export default fetchData;