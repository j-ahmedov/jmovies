import './App.css'
import { Component } from 'react'
import AppInfo from '../app-info/AppInfo'
import SearchPanel from '../search-panel/SearchPanel'
import MoviesFilter from '../movies-filter/MoviesFilter'
import MovieList from '../movie-list/MovieList'
import MoviesAddForm from '../movies-add-form/MoviesAddForm'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'Shawshank Redemption', viewers: 800, favourite: false, like: false, id: 1},
        {name: 'Gladiator', viewers: 900, favourite: false, like: false, id: 2},
        {name: 'Pirates of the Caribbean', viewers: 650, favourite: false, like: false, id: 3}, 
      ],
      term: '',
      filter: ''
    }
  }

  onDelete = (id) => {
    this.setState(({data}) => ({
      data: data.filter(c => c.id !== id)
    }))
  }

  addData = (item) => {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}
    this.setState(({data}) => ({
      data: [...data, newItem]
    }))
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  filterHandler = (arr, filter) => {
    switch(filter) {
      case 'popular':
        return arr.filter(c => c.like)
      case 'most_viewed':
        return arr.filter(c => c.viewers > 800)
      default:
        return arr
    }
  }

  updateTermHandler = (term) => this.setState({term})
  
  updateFilterHandler = (filter) => this.setState({filter})
  

  render() {

    const {data, term, filter} = this.state
    const allMoviesCount = data.length
    const favouriteMoviesCount = data.filter(c => c.favourite).length
    const visibleData = this.filterHandler(this.searchHandler(data, term), filter)

    return (
      <div className='app font-monospace'>
        <div className='content'>
          <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount} />
          <div className='search-panel'>
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <MoviesFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
          </div>
          <MovieList 
            onToggleProp={this.onToggleProp}
            data={visibleData} 
            onDelete={this.onDelete} 
          />
          <MoviesAddForm addData={this.addData}/>
        </div>
      </div> 
    )

  }

}

export default App