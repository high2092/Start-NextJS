import { useEffect, useState } from "react";
import { Seo } from "../components/Seo";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const httpGetPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  const { results } = await response.json();

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 300);
  });

  return results;
};

interface Movie {
  id: string;
  original_title: string;
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    httpGetPopularMovies().then(setMovies);
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {movies === undefined ? (
        <h4>Loading... {movies}</h4>
      ) : (
        movies.map(({ id, original_title }) => (
          <div key={id}>
            <h4>{original_title}</h4>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
