import '../styles/global.css';

export default function App({ Component, pageProps }) {
  console.log('Component, pageProps===>', Component, pageProps);
  return <Component {...pageProps} />;
}