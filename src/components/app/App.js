import './App.css'
import AppInfo from '../app-info/AppInfo'
import SearchPanel from '../search-panel/SearchPanel'
import MoviesFilter from '../movies-filter/MoviesFilter'
import MovieList from '../movie-list/MovieList'
import MoviesAddForm from '../movies-add-form/MoviesAddForm'

const App = () => {

  const data = [
    {name: 'Shawshank Redemption', viewers: 800, favourite:false, id: 1},
    {name: 'Gladiator', viewers: 700, favourite:false, id: 2},
    {name: 'Pirates of the Caribbean', viewers: 650, favourite:true, id: 3},
    
  ];

  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <MoviesFilter />
        </div>
        <MovieList data={data} />
        <MoviesAddForm />
      </div>
    </div>
    
  )
}

export default App