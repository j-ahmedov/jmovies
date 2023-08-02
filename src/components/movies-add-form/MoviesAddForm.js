import { Component } from 'react';
import './MoviesAddForm.css';

class MoviesAddForm extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        name: '',
        viewers: ''
    }
  }

  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addDataHandler = (e) => {
    e.preventDefault()
    this.props.addData({name: this.state.name, viewers: this.state.viewers})
    this.setState({
      name: '',
      viewers: ''
    })

  }

  render() {

    const {name, viewers} = this.state

    return (
      <div className="movies-add-form">
          <h3>Yangi kino qo'shish</h3>
          <form className='add-form d-flex' onSubmit={this.addDataHandler}>
              <input type='text' className='form-control new-post-label' placeholder='Kino nomi' onChange={this.changeHandlerInput} name='name' value={name}/>
              <input type='number' className='form-control new-post-label ms-2 me-2' placeholder="Ko'rishlar soni" onChange={this.changeHandlerInput} name='viewers' value={viewers}/>
              <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
  
          </form>
      </div>
    )

  }
 
}

export default MoviesAddForm