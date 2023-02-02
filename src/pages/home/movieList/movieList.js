import React, { useEffect, useState } from "react";
// import Card from "../card/card";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Card from "../../../components/Card/Card";
import axios from "axios";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  console.log(type);

  // useEffect(() => {
  //   const getData = () => {
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/${
  //         type ? type : "popular"
  //       }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setMovieList(data.results));
  //   };
  //   getData();
  // }, [type]);

  const getAllMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    try {
      setMovieList(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, [type]);

  return (
    <div className="movie__list">
      <h2 className="list__title">
        {/* {(type ? type : "POPULAR").toUpperCase()} */}
        POPULAR
      </h2>
      <div className="list__cards">
        {movieList?.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
