import MovieListItem from '../movie-list-item/MovieListItem';
import './MovieList.css';

const MovieList = ({data}) => {
  return (
    <div className='movie-list'>
        {data.map(item => (
            <MovieListItem name={item.name} viewers={item.viewers} favourite={item.favourite}/>
        ))}
    </div>
  )
}

export default MovieList