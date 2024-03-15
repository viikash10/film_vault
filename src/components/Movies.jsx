import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import axios from "axios";

function Movies() {
 const [movies, setMovies] = useState([]);

 const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: "avengers" },
    headers: {
      "X-RapidAPI-Key": "YOUR_API_KEY",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
 };

 async function fetchData() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      // Adjusted to use response.data.d as the source of movies
      if (response.data && response.data.d) {
        setMovies(response.data.d);
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (error) {
      console.error(error);
    }
 }

 useEffect(() => {
    fetchData();
 }, []); // Empty dependency array means this effect runs once on mount

 return (
    <div className="p-5 justify-around">
      <div className="text-2xl font-bold text-center">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around p-8 ">
        {movies && movies.map((movieObj) => {
          // Passing relevant movie information as props
          return (
            <MoviesCard
              key={movieObj.id} // Unique key for each movie
              title={movieObj.l} // Movie title
              imageUrl={movieObj.i.imageUrl} // Image URL
              year={movieObj.y} // Release year
              cast={movieObj.s} // Cast
            />
          );
        })}
       
      </div>
    </div>
 );
}

export default Movies;
