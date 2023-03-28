import { Inter } from "@next/font/google";
import Head from "next/head";
import Home from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function Homeapp() {
  return (
    <>
      <Head>
        <title>Huang News</title>
        <meta name="description" content="Huang news" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
