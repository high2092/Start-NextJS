import { useEffect } from "react";
import { Seo } from "../components/Seo";

const foo = ({ aboutPageProps }: any) => {
  const { content } = aboutPageProps;

  useEffect(() => {
    console.log(aboutPageProps);
  }, []);

  return (
    <>
      <Seo title="About" />
      <h1>{content}</h1>
    </>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      aboutPageProps: {
        content: "About Us",
      },
    },
  };
};

export default foo;
