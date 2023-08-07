import './App.css'
import { useState } from 'react'
import AppInfo from '../app-info/AppInfo'
import SearchPanel from '../search-panel/SearchPanel'
import MoviesFilter from '../movies-filter/MoviesFilter'
import MovieList from '../movie-list/MovieList'
import MoviesAddForm from '../movies-add-form/MoviesAddForm'
import { v4 as uuidv4 } from 'uuid';


const arr = [
  {name: 'Shawshank Redemption', viewers: 800, favourite: false, like: false, id: 1},
  {name: 'Gladiator', viewers: 900, favourite: false, like: false, id: 2},
  {name: 'Pirates of the Caribbean', viewers: 650, favourite: false, like: false, id: 3}, 
]

const App = () => {
  const [data, setData] = useState(arr)

  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState('')

  const onDelete = (id) => {
    setData(data.filter(c => c.id !== id))
  }

  const addData = (item) => {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}
    setData([...data, newItem])
  }

  const onToggleProp = (id, prop) => {
    const newData = data.map(item => {
      if(item.id === id) {
        return {...item, [prop]: !item[prop]}
      }
      return item
    })

    setData(newData)

  }

  const searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  const filterHandler = (arr, filter) => {
    switch(filter) {
      case 'popular':
        return arr.filter(c => c.like)
      case 'most_viewed':
        return arr.filter(c => c.viewers > 800)
      default:
        return arr
    }
  }

  const updateTermHandler = (term) => setTerm(term)
  const updateFilterHandler = (filter) => setFilter(filter)

  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo 
          allMoviesCount={data.length} 
          favouriteMoviesCount={data.filter(c => c.favourite).length}   
        />
        <div className='search-panel'>
          <SearchPanel updateTermHandler={updateTermHandler} />
          <MoviesFilter filter={filter} updateFilterHandler={updateFilterHandler}/>
        </div>
        <MovieList 
          onToggleProp={onToggleProp}
          data={filterHandler(searchHandler(data, term), filter)} 
          onDelete={onDelete} 
        />
        <MoviesAddForm addData={addData}/>
      </div>
    </div> 
  )

}

export default App