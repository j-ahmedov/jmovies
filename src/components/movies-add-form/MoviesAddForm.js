import './MoviesAddForm.css';

const MoviesAddForm = () => {
  return (
    <div className="movies-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex'>
            <input type='text' className='form-control new-post-label' placeholder='Kino nomi'/>
            <input type='number' className='form-control new-post-label ms-2 me-2' placeholder="Ko'rishlar soni" />
            <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>

        </form>
    </div>
  )
}

export default MoviesAddForm