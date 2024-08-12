// src/pages/_app.js
import NavBar from '../components/NavBar';
import '../styles/globals.css'; // Reference to global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
