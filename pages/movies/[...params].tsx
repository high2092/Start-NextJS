import { useRouter } from "next/router";
import { useEffect } from "react";
import { Seo } from "../../components/Seo";

const httpGetMovieDetail = async (id: string) => {
  const response = await fetch(`movie/${id}`);
  const result = await response.json();
  console.log(result);

  return result;
};
const Detail = ({ params }: any) => {
  const router = useRouter();

  const [title, id] = (params as string[]) || [];

  return (
    <>
      <Seo title={title} />
      <div>{title}</div>
    </>
  );
};

export const getServerSideProps = ({ params: { params } }: any) => {
  return {
    props: { params },
  };
};
export default Detail;
