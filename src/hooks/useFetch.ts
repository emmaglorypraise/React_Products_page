
import useApi from "./useApi";


const api = "https://randomuser.me/api/";
const useFetch = async () => {
  const newData = await useApi(api, "?gender=female")
  console.log(newData)
  return {
    newData
  }
};

export default useFetch;
