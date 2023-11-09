import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

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

        SaveInStorage("movies", movie);
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
