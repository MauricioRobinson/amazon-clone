import Banner from "components/Banner/Banner";
import Header from "components/Header/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100">
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

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
      </main>
    </div>
  );
}

