"use client"
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-24 pb-10 bg-[#181c2b] relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none select-none">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-40 "
        />
      </div>

      <div className="flex flex-col items-center z-10 relative">
        <h2 className="heading lg:max-w-[45vw] mb-2">
         
        </h2>
        <p className="text-slate-300 md:mt-8 my-4 text-center max-w-xl text-lg">
          Ready to elevate your business with robust, scalable web solutions? Reach out and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:khanedu101@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center z-10 relative gap-4">
        <p className="md:text-base text-sm md:font-normal font-light text-slate-400">
          &copy; {new Date().getFullYear()} Armaan Khan
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link key={info.id} href={info.link || '#'} target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center bg-black/60 rounded-lg border border-white/10 hover:bg-purple/30 transition-colors">
                <Image src={info.img} alt="icon" width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
