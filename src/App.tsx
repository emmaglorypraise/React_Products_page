import Loader from "./components/Loader";
import ErrorComponent from "./components/ErroComponent";
import Products from "./components/Products";
import useData from "./hooks/useData";
// import newData from "./hooks/useFetch";
import useApi from "./hooks/useApi";
import "./App.css";



const apiUrl = "https://fakestoreapi.com/";
const api = "https://jsonplaceholder.typicode.com/";

function App() {
  const { data:response, fetchData } = useData(apiUrl, "products");
  const { data, loading, hasError } = response;

  // const { newData:dataa } = newData;
  // console.log(dataa)

  const { apiData:todo, fetchApiData } =  useApi(api, "users")
  // const item = apiData.results[0].gender;

  // const todosss = todo[0];
  console.log(todo?.[0]?.name);
   
  // console.log(apiData, "datttatta")
  // const gender = apiData.gender;
  // const { results } = apiData;;

  const _data = <> <Products data={data} /> </>
  const _loading = loading ? <Loader /> : "";
  const _error = hasError ? <ErrorComponent text={hasError} retry={fetchData} /> : "";

  return (
    <>
    <div>
    </div>
      {_loading}
      {_error}
      {_data}
    </>
  );
}

export default App;
