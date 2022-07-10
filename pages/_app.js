import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import "../styles/globals.css";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { motion, AnimatePresence } from "framer-motion";
i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: "fr",
    backend: {
      loadPath: "/translations/{{lng}}/translations.json",
    },
  });

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
