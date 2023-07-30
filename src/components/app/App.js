import './App.css'
import AppInfo from '../app-info/AppInfo'
import SearchPanel from '../search-panel/SearchPanel'
import AppFilter from '../app-filter/AppFilter'

const App = () => {
  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
      </div>
    </div>
    
  )
}

export default App