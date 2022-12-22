import { Provider } from "react-redux";
import { store } from "store/store";
import "@styles/globals.css";
import { SessionProvider } from "next-auth/react";
import MainLayout from "components/Layouts/MainLayout";

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
