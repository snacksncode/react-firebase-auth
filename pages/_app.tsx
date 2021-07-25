import "../styles/globals.scss";
import type { AppProps } from "next/app";
import AuthProvider from "../contexts/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
