"use client";
import Image from "next/image";
import GithubIcon from "../public/github.svg";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 justify-center space-x-2 p-4 text-[#607B96] border-2 border-b bg-[#011627]">
      <div className="flex justify-between">
        <div className="text-sm">
          find me on{" "}
          <a
            href="
https://www.linkedin.com/in/calabresevalentina/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin
          </a>
        </div>
        <span className="flex items-center text-sm">
          @vale-c <Image className="ml-2" src={GithubIcon} alt="Github icon" />
        </span>
      </div>
    </footer>
  );
}
