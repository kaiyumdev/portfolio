/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Abdul Kaiyum's Portfolio</title>
      </Head>
      <h1 className="text-blue-800">Lets build a awasome portfolio</h1>
      <h2>This is seriously amazing from me</h2>
      <h2>This is seriously outstanding from me</h2>
    </main>
  );
}
