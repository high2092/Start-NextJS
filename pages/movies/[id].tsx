import { useRouter } from "next/router";
import { useEffect } from "react";

const httpGetMovieDetail = async (id: string) => {
  const response = await fetch(`movie/${id}`);
  const result = await response.json();
  console.log(result);

  return result;
};
const Detail = () => {
  const router = useRouter();

  return <div>{router.query.title}</div>;
};

export default Detail;
