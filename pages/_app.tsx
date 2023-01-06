import NavigationBar from "../components/NavigationBar";
import "../styles/globals.css";

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
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

export default App;
