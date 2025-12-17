import React from "react";
import Aust from "../assets/aust.png";
import { TypeAnimation } from "react-type-animation";

export default function Homee() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly h-screen px-4 md:px-10 relative -translate-y-30">
        {/* Left Side: Text Section */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-gray-400">Hey There!</h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-400">
            I'm <span className="text-white">Hashir</span>
          </h1>

          <div className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 whitespace-nowrap">
  <TypeAnimation
    sequence={[
      "Software Developer",
      1000,
      "MERN Stack Developer",
      1000,
      "Welcome to my website",
      1000,
      () => console.log("Sequence completed"),
    ]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
    style={{ display: "inline-block" }}
    aria-label="Introduction animation"
  />
</div>
        </div>

        {/* Right Side: Aust Image */}
        <div className="w-[300px] md:w-[400px]">
          <img
            src={Aust}
            alt="Astronaut"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
}