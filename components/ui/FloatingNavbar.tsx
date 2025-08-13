"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

  const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollYProgress.getPrevious?.() ?? 0;
      let direction = current - prev;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        aria-label="Main navigation"
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-8 inset-x-0 mx-auto px-10 py-4 rounded-2xl border border-white/10 shadow-lg items-center justify-center gap-6 bg-gradient-to-r from-[#181c2b]/90 via-[#23263a]/90 to-[#181c2b]/90 backdrop-blur-xl",
          className
        )}
        style={{
          border: "1.5px solid rgba(255,255,255,0.10)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center gap-2 text-base font-medium text-slate-200 hover:text-purple transition-colors duration-150 px-3 py-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/60"
            )}
          >
            {navItem.icon && <span className="block sm:hidden">{navItem.icon}</span>}
            <span className="!cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        <a href="#contact" className="ml-6">
          <span className="inline-block bg-purple text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:bg-purple/90 transition-colors duration-150 text-sm">Let's Connect</span>
        </a>
      </motion.nav>
    </AnimatePresence>
  );
};
export default FloatingNav;