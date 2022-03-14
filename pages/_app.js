import Footer from "../Components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <pre>from _app.js {JSON.stringify(pageProps, null, 2)}</pre>
      <Footer />
    </div>
  );
}

export default MyApp;
