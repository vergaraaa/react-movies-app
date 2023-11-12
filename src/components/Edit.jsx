import React from 'react'

export const Edit = ({ movie, getMovies, setMovies, setEdit }) => {

    const componentTitle = "Edit movie";

    const saveEdit = (e, id) => {
        e.preventDefault();

        let target = e.target;

        const movies = getMovies();
        const index = movies.findIndex(movie => movie.id === id);

        let newMovie = {
            id,
            title: target.title.value,
            description: target.description.value,
        }
        
        movies[index] = newMovie;

        localStorage.setItem("movies", JSON.stringify(movies));

        setMovies(movies);
        setEdit(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{componentTitle}</h3>
        <form onSubmit={e => saveEdit(e, movie.id)}>
            <input type="text" name="title" className='edit_title' defaultValue={movie.title} />
            <textarea name="description" className='edit_description' defaultValue={movie.description}  />

            <input type="submit" className='edit' value="Update" />
        </form>
    </div>
  )
}
