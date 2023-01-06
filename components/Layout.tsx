import NavigationBar from "./NavigationBar";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <NavigationBar />
      <div>{children}</div>

      <style jsx global>
        {`
          a {
            color: grey;
          }
        `}
      </style>
    </>
  );
};
