import React, { useState } from 'react'

export const AddMovie = () => {

    const titleComponent = "Add movie";

    const [movieState, setMovieState] = useState({
        title: "",
        description: "",
    });

    const { title, description } = movieState;

    const getFormData = e => {
        e.preventDefault();

        // get data from form
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        // create movie object to save
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }

        setMovieState(movie);

        saveInStorage(movie);
    }
    
    const saveInStorage = (movie) => {
        let movies = JSON.parse(localStorage.getItem("movies"));

        if(Array.isArray(movies)) {
            movies.push(movie);
        }
        else {
            movies = [movie];
        }

        localStorage.setItem("movies", JSON.stringify(movies));

        return movie;
    }

  return (
    <div className="add">
        <h3 className="title">{titleComponent}</h3>

        <strong>
            {(title && description) && `You have created the movie ${title}`}
        </strong>

        <form onSubmit={getFormData}>
            <input 
                type="text" 
                id='title' 
                name='title'
                placeholder="Title" 
            />
            <textarea 
                id='description'
                name='description'
                placeholder="Description"
            ></textarea>

            <input type="submit" value="Save" />
        </form>
    </div>
  )
}
