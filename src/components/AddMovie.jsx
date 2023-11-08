import React from 'react'

export const AddMovie = () => {
  return (
    <div className="add">
        <h3 className="title">Add movies</h3>
        <form>
            <input type="text" placeholder="Title" />
            <textarea placeholder="Description"></textarea>
            <input type="submit" value="Save" />
        </form>
    </div>
  )
}
