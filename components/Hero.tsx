import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, setText] = useTypewriter({
    words: [
      "Hi, My name is Abdul Kaiyum Fahim",
      "<Developer/>",
      "<ButLovesToMoreCode/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A"></Cursor>
      </h1>
    </div>
  );
};

export default Hero;
