import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";

import "./App.css";
import SearchIcon from "./search.svg";
//
const API_URL = "http://www.omdbapi.com?apikey=dcee200b";
const movie1 = {
  Title: "Spider-Man",
  Year: "2002",
  imdbID: "tt0145487",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("spider");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for Movies "
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
