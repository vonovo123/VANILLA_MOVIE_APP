import axios from 'axios'
const fetchData = async function(url){
  try{
    const res = await axios.get(url);
    return res;
    } catch(error){
      console.log(error)
    }
}
export default fetchData;