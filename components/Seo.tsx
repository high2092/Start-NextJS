import Head from "next/head";

export const Seo = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};
