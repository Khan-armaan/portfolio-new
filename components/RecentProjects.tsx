"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

import Link from "next/link";

const RecentProjects = () => {
  return (
    <section className="py-24 bg-black-100" id="projects">
      <h2 className="heading mb-2">
        <span className="text-purple">Featured Projects</span>
      </h2>
      <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
        A curated selection of scalable, production-grade applications I've architected and delivered for startups and enterprises.
      </p>
      <div className="flex flex-wrap items-stretch justify-center gap-12">
        {projects.map((item) => (
          <Link href={item.link || '#'} key={item.id} target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative flex flex-col items-center justify-between bg-gradient-to-br from-[#23263a]/80 to-[#181c2b]/90 rounded-3xl shadow-2xl p-6 sm:w-96 w-[90vw] min-h-[28rem] border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-purple/40 animate-fade-in">
              {/* Animated gradient border overlay */}
              <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-transparent animate-gradient-move blur-2xl opacity-60" />
              </div>
              <div className="relative w-full h-40 mb-6 rounded-2xl overflow-hidden flex items-center justify-center bg-[#13162D]">
                <img src="/bg.png" alt="bgimg" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <img src={item.img} alt={item.title} className="relative z-10 max-h-32 object-contain drop-shadow-lg" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2 text-center line-clamp-1">{item.title}</h3>
              <p className="text-slate-300 text-base font-normal mb-4 text-center line-clamp-3">{item.des}</p>
              <div className="flex items-center justify-between w-full mt-auto">
                <div className="flex items-center gap-1">
                  {item.iconLists.filter(Boolean).map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/10 rounded-full bg-black w-8 h-8 flex justify-center items-center shadow-md hover:scale-110 transition-transform"
                      style={{ transform: `translateX(-${4 * index}px)` }}
                    >
                      <img src={icon} alt="tech" className="p-1 max-h-6 max-w-6" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple text-sm font-semibold">{item.link ? 'Live Site' : 'Source'}</span>
                  <FaLocationArrow className="text-purple" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
