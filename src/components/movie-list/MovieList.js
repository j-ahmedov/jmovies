import { useContext } from 'react';
import MovieListItem from '../movie-list-item/MovieListItem';
import { Context } from '../../context';
import { filterHandler, searchHandler } from '../../utilities/data';
import './MovieList.css';

const MovieList = () => {
  const { state } = useContext(Context) 

  const data = filterHandler(searchHandler(state.data, state.term), state.filter)

  return (
    <div className='movie-list'>
        {data.map(item => (
            <MovieListItem 
              id={item.id}
              {...item}
            />
        ))}
    </div>
  )
}

export default MovieList