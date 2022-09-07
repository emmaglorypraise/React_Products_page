import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import ErrorComponent from "./components/ErroComponent";
import Products from "./components/Products";
import "./App.css";


type Count = {
  rate: number;
  count: number;
};
type Data = {
  id: number;
  category: string;
  image: string;
  title: string;
  price: number;
  description: string;
  rating: Count;
};

const defaultData: Data[] = [];

const apiUrl = "https://fakestoreapi.com/";

function App() {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data[]>(defaultData);


  const fetchData = async () => {
    try {
      const { data: apiData } = await axios.get(`${apiUrl}products`);
      setData(apiData);
      // console.log(apiData);
    } catch (error: any) {
      // console.log(error)
      // console.log(error.message);
      setHasError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const _data = <> <Products data={data} /> </>
  const _loading = loading ? <Loader /> : "";
  const _error = hasError ? <ErrorComponent text={hasError} retry={fetchData} /> : "";

  return (
    <>
      {_loading}
      {_error}
      {_data}
    </>
  );
}

export default App;
