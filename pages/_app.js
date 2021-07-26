import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
// TODO remove sample styles
import "../styles/reset.css";
import "../styles/main.css";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
}

export default MyApp;
