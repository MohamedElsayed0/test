import { useEffect } from "react";
import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
