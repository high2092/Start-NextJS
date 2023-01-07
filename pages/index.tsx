import { useEffect, useState } from "react";
import { Seo } from "../components/Seo";

const httpGetPopularMovies = async () => {
  const response = await fetch("/api/movies");

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
    console.log(process.env.NEXT_PUBLIC_API_KEY);
    console.log(process.env.API_KEY);
  }, []);

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
