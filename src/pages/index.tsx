/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>Abdul Kaiyum Fahim</title>
      </Head>
      <Header></Header>
      {/*Hero */}
      <section id="">
        <Hero></Hero>
      </section>
    </div>
  );
}
