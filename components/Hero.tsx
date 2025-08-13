"use client"
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="relative pb-24 pt-40">
      {/* Decorative Spotlights for premium look */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#fff" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="#a78bfa" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#60a5fa" />
      </div>

      {/* Subtle grid background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.08] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-200 max-w-80 mb-2 font-semibold">
            Building Robust, Scalable, and Beautiful Digital Products
          </p>
          <TextGenerateEffect
            words="I design & engineer scalable web applications that empower businesses to grow."
            className="text-center text-[2.5rem] md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
          />
          <p className="text-center md:tracking-wider mb-6 text-base md:text-lg lg:text-2xl text-slate-300 max-w-2xl">
            Hi, I'm <span className="text-purple font-bold">Armaan Khan</span> — a software engineer specializing in full-stack, cloud-native, and high-performance web solutions. I help startups and enterprises turn ideas into scalable, production-ready products.
          </p>
          <a href="https://drive.google.com/file/d/1oRW_L30B5QkYfm3sczyzrQNtxY5AlqGC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="Download CV"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
