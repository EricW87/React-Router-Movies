import React from 'react';
import { Link, NavLink } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {console.log(props.list)}
    {props.list.map((movie) => (
      <NavLink to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</NavLink>
    ))}
    <Link to="/" className="home-button">Home</Link>
  </div>
);

export default SavedList;
