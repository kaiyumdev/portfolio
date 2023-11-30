/* eslint-disable react/no-unescaped-entities */
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <Head>
        <title>Abdul Kaiyum Fahim</title>
      </Head>
      <Header></Header>
      {/*Hero */}
      <section id="hero" className="snap-center">
        <Hero></Hero>
      </section>

      {/*About */}
      <section id="about" className="snap-center">
        <About></About>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience></WorkExperience>
      </section>

      <section id="skills" className="snap-start">
        <Skills></Skills>
      </section>
    </div>
  );
}
