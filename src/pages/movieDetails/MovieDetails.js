import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      try {
        setMovieDetail(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, []);

  //

  return (
    <div>
      <img
        src={
          `https://image.tmdb.org/t/p/original` +
          movieDetail?.belongs_to_collection?.poster_path
        }
        width="500px"
        height="500px"
      />
    </div>
  );
};

export default MovieDetails;
