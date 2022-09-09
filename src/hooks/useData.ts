import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { InitialData } from "../types";

const initialData = {
  loading: true,
  hasError: false,
  data: [],
};

const useData = (baseUrl = "", endpoint = "") => {
  const [data, setData] = useState<InitialData>(initialData);

  const fetchData = async () => {
    try {
      setData(initialData);
      const response = await axios.get(`${baseUrl}${endpoint}`);
      setData((prev: InitialData) => ({
        ...prev,
        data: response.data,
      }));
    } catch (e: any) {
      setData((prev: InitialData) => ({
        ...prev,
        hasError: e,
      }));
    } finally {
      setData((prev: InitialData) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  const getData = useCallback(() => {
    fetchData();
  }, [baseUrl, endpoint]);

  useEffect(() => {
    let mounted = true;
    if(!mounted) return;
    if (!baseUrl || !endpoint) return;

    getData();
    return() => {
      mounted = false;
    }
  }, [baseUrl, endpoint]);

  return {
    data,
    setData,
    fetchData
  };
};

export default useData;
