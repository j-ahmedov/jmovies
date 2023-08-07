import { useState } from 'react';
import './SearchPanel.css';

const SearchPanel = (props) => {
  const [term, setTerm] = useState('')
  
  const updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase()
    setTerm(term)
    props.updateTermHandler(term)
  }

  return (
    <input 
      type="text" 
      className="form-control search-input" 
      placeholder="Kino qidirish" 
      onChange={updateTermHandler}
      value={term}  
    />
  )
}

export default SearchPanel