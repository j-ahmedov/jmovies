import "./App.css";
import { useContext, useEffect, useState } from "react";
import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import MoviesFilter from "../movies-filter/MoviesFilter";
import MovieList from "../movie-list/MovieList";
import MoviesAddForm from "../movies-add-form/MoviesAddForm";
import { Context } from "../../context";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({
          name: item.title,
          id: item.id,
          viewers: item.id * 10,
          favourite: false,
          like: false,
        }));
        dispatch({ type: "GET_DATA", payload: newArr });
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <MoviesFilter />
        </div>
        {isLoading && "Loading..."}
        <MovieList />
        <MoviesAddForm />
      </div>
    </div>
  );
};

export default App;
