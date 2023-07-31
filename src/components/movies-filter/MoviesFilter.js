import './MoviesFilter.css';

const MoviesFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-dark" type="button">Barcha kinolar</button>
      <button className="btn btn-outline-dark" type="button">Mashhur kinolar</button>
      <button className="btn btn-outline-dark" type="button">Eng ko'p ko'rilgan</button>
    </div>
  )
}

export default MoviesFilter