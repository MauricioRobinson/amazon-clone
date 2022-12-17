import Header from "components/Header/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon clone</title>
        <meta
          name="description"
          content="Amazon clone website by MarsDev"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
    </>
  );
}

