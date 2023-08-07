import { useState } from 'react';
import './MoviesAddForm.css';

const MoviesAddForm = ({addData}) => {

  const [state, setState] = useState({name: '', viewers: ''})

  const changeHandlerInput = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const addDataHandler = (e) => {
    e.preventDefault()
    if (state.name === '' || state.viewers === '') return
    addData({name: state.name, viewers: state.viewers})
    setState({name: '', viewers: ''})
    
  }

  return (
    <div className="movies-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex' onSubmit={addDataHandler}>
            <input 
              type='text' 
              className='form-control new-post-label' 
              placeholder='Kino nomi' 
              onChange={changeHandlerInput} 
              name='name' 
              value={state.name}/>
            <input 
              type='number' 
              className='form-control new-post-label ms-2 me-2' 
              placeholder="Ko'rishlar soni" 
              onChange={changeHandlerInput} 
              name='viewers' 
              value={state.viewers}/>
            <button 
              type='submit' 
              className='btn btn-outline-dark'>
              Qo'shish
            </button>
  
        </form>
    </div>
  )
}

export default MoviesAddForm