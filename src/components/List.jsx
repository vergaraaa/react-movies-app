import React, { useEffect } from 'react'

export const List = ({ movies, setMovies }) => {
  
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));

    setMovies(movies);
  }

  return (
    <>
    {
      movies != null 
        ? movies.map(movie => {
            return (
              <article key={movie.id} className="movie-item">
                <h3 className="title">{movie.title}</h3>
                <p className="description">{movie.description}</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </article>
            );
          })
      : <h2>
          No movies to show
        </h2>
    }
    </>
  )
}
