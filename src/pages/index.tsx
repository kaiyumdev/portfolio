/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ContactMe from "components/ContactMe";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
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

      <section id="projects" className="snap-start">
        <Projects></Projects>
      </section>

      <section id="contact" className="snap-start">
        <ContactMe></ContactMe>
      </section>

      {/* */}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src=""
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
