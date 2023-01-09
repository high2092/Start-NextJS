import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Seo } from "../components/Seo";

const httpGetPopularMovies = async () => {
  const response = await fetch("http://localhost:3000/api/movies");

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

const Home = ({ homePageProps, aboutPageProps }: any) => {
  const { movies }: { movies: Movie[] } = homePageProps;

  const router = useRouter();

  const handleMovieClick = (id: string, title: string) => () => {
    router.push(`/movies/${title}/${id}`);
  };

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_KEY);
    console.log(process.env.API_KEY);
  }, []);

  useEffect(() => {
    console.log(aboutPageProps); // undefined
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {movies.map(({ id, original_title }) => (
        <div key={id} onClick={handleMovieClick(id, original_title)}>
          <h4>{original_title}</h4>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const movies = await httpGetPopularMovies();

  return {
    props: {
      homePageProps: {
        movies,
      },
    },
  };
};

export default Home;
