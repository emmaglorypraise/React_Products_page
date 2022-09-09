import axios from "axios";
import { useState, useCallback, useEffect } from "react";

// type DefaultApiData = {
//   data: [];
// };

// const defaultApiData = <any>[];

const useApi = (baseUrl = "", endpoint = "") => {
  const [apiData, getApiData] = useState<any>(null);
  const fetchApiData = async () => {
    try {
      const response = await axios.get(`${baseUrl}${endpoint}`);
      console.log(response.data);
      getApiData(response.data);
      // getApiData((prev: DefaultApiData) => ({
      //   ...prev,
      //   apiData: response.data,
      // }));
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };

  const getNewData = useCallback(() => {
      fetchApiData()
    },
    [baseUrl, endpoint],
  );

  useEffect(() => {
    let mount = true;
    if(!mount) return;
    if(!baseUrl || !endpoint) return
    getNewData()
    return () => {
      mount = false
    }
  }, [baseUrl, endpoint]);

  return {
    apiData, 
    fetchApiData
  }
};

export default useApi;
