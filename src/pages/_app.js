import { Provider } from "react-redux";
import { store } from "store/store";
import "@styles/globals.css";
import { SessionProvider } from "next-auth/react";
import MainLayout from "components/Layouts/MainLayout";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

const progress = new ProgressBar({
  size: 4,
  delay: 100,
  className: "z-50",
  color: "#ff9624",
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </SessionProvider>
  );
}
