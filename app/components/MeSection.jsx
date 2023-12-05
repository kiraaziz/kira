"use client";
import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaFacebookF, FaGithub } from "react-icons/fa";
import Planet from "./3d/Planet";

export default function MeSection() {
  const [visibility, setVisibility] = useState(false);
  const initialRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibility(true);
        } else {
          //setVisibility(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(initialRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const Texts = [
    "Welecome To <span class='textHighlight'>Aziz's</span> Site",
    "Known As <span class='textHighlight'>Kira</span>",
    "The <span class='textHighlight'>Developer</span> You Need",
    "Design, Frontend, Backend",
  ];

  return (
    <div
      ref={initialRef}
      className="w-full h-[100svh] flex items-center justify-center relative flex-col "
    >
      <div className={`blockxxx duration-1000 z-10 absolute rounded-full -left-[20svh] -top-[20svh] ease-in-out ${!visibility ? "w-[0svh] h-[0svh] opacity-0" : "w-[110svh] h-[110svh] opacity-100"} `}>
        <div></div>
      </div>
      <div
        style={{ zIndex: 1 }}
        className={`h-full absolute top-0 left-0 bg-black ease-in-out z-[1] duration-1000 border-purple-400  ${visibility ? "w-full" : "w-full"
          }`}
      >
      </div>
      <h1
        style={{ zIndex: 12 }}
        className={`flex-1 flex items-center ${visibility ? "tracking-normal" : "tracking-widest"
          } ease-in-out duration-1000 font-bold max-w-5xl lg:max-w-full  text-5xl lg:text-7xl delay-1000 text-center welcome-text`}
      >
        <Typewriter
          options={{
            strings: Texts,
            autoStart: true,
            delay: 60,
            loop: true,
          }}
        />
      </h1>
      <div
        className="flex items-center w-full justify-end px-10 pb-5 gap-5 overflow-visible"
        style={{ zIndex: 5 }}
      >
        <div className={`x h-max w-max items-center justify-center flex  delay-100 duration-1000  ${visibility
          ? "opacity-100 translate-x-0"
          : "translate-x-24 opacity-0 "
          }`}>

          <div
            className={` rounded-md p-2 overflow-hidden ease-in-out delay-100 duration-1000 hover:scale-125`}
          >
            <FaFacebookF size={20} className="text-white" />
          </div>
        </div>
        <div className={`x h-max w-max items-center justify-center flex  delay-100 duration-1000  ${visibility
          ? "opacity-100 translate-x-0"
          : "translate-x-24 opacity-0 "
          }`}>

          <div
            className={` rounded-md p-2 overflow-hidden ease-in-out delay-100 duration-1000 hover:scale-125`}
          >
            <FaGithub size={20} className="text-white" />
          </div>
        </div>
        <div className={`x h-max w-max items-center justify-center flex  delay-100 duration-1000  ${visibility
          ? "opacity-100 translate-x-0"
          : "translate-x-24 opacity-0 "
          }`}>

          <div
            className={` rounded-md p-2 overflow-hidden ease-in-out delay-100 duration-1000 hover:scale-125`}
          >
            <FaLinkedin size={20} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
