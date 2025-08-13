"use client"
import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="py-24 w-full bg-[#181c2b]" id="experience">
      <h2 className="heading mb-2">
        <span className="text-purple">Professional Experience</span>
      </h2>
      <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
        Proven track record delivering scalable, high-impact solutions for startups and established companies.
      </p>
  <div className="w-full flex flex-col gap-10 mt-8 px-4 md:px-12 lg:px-32">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-white border-white/10 mt-0 bg-gradient-to-br from-[#23263a] to-[#181c2b] shadow-lg"
          >
            <div className="flex lg:flex-row flex-col lg:items-start p-3 py-6 md:p-5 lg:p-10 gap-6">
              <Image
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16 rounded-xl shadow-md"
              />
              <div className="lg:ms-5">
                <h3 className="text-start text-2xl font-bold text-purple mb-2">
                  {card.title}
                </h3>
                <ul className="list-disc pl-5 text-slate-200 space-y-2">
                  {card.desc1 && <li>{card.desc1}</li>}
                  {card.desc2 && <li>{card.desc2}</li>}
                  {card.desc3 && <li>{card.desc3}</li>}
                </ul>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
