/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { SnakeGame } from "@/components/snake-game/snake-game";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen py-12 md:flex-row md:py-0 text-center md:text-start">
      {" "}
      <div className="flex-1">
        <p className="font-light text-[#E5E9F0] text-2xl">Hi all. I am</p>
        <h1 className="text-[#E5E9F0] mb-2 text-6xl md:text-4xl">Vale</h1>
        <p className="text-2xl font-md md:font-light text-[#4D5BCE]">
          &gt; Front-end Engineer
        </p>
        <p className="mt-12 text-[#607B96] text-sm md:text-md">
          // complete the game to continue
          <br />
          // you can also see it on my Github page
        </p>
        <div className="flex flex-row items-center justify-center space-x-2 my-4 md:mt-2 text-sm md:text-md">
          <span className="text-[#4D5BCE]">const </span>
          <span className="text-[#43D9AD]">githubLink </span>
          <span className="text-white"> = </span>
          <a
            href="https://github.com/example/url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E99287] underline"
          >
            https://github.com/vale-c/snake-game
          </a>
        </div>
      </div>
      <div className="hidden lg:flex justify-center ml-24">
        <SnakeGame />
      </div>
    </div>
  );
}
