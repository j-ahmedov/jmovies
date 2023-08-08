import { useContext } from "react";
import "./MoviesFilter.css";
import { Context } from "../../context";

const MoviesFilter = () => {
  const {state, dispatch} = useContext(Context)
  return (
    <div className="btn-group">
      {btnArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${
            state.filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => dispatch({type: "ON_FILTER", payload: btn.name})}
          type="button"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const btnArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashhur kinolar" },
  { name: "most_viewed", label: "Eng ko'p ko'rilgan kinolar" },
];

export default MoviesFilter;
