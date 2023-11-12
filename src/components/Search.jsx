import React, { useState } from 'react'

export const Search = ({movies, setMovies}) => {

  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);

  const findMovie = e => {
    setSearch(e.target.value);

    let foundMovies = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))

    if(search.length <= 1 || foundMovies.length <= 0) {
      foundMovies = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true);
    }
    else {
      setNotFound(false);
    }

    setMovies(foundMovies);
  };

  return (
    <div className="search">
        <h3 className="title">Search: {search}</h3>
        { (notFound == true && search.length > 1) && (
          <span className='not-found'>No movies with that title</span>
        )}
        <form>
            <input type="text" 
              name='search' 
              autoComplete='off' 
              onChange={findMovie}
            />
            <button id='search'>Search</button>
        </form>
    </div>
  )
}
