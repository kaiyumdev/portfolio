/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdul Kaiyum Fahim</title>
      </Head>
      {/*Header */}
      <Header></Header>
    </div>
  );
}
