"use client";
import React, { useEffect, useRef, useState } from "react"
import { FaDesktop, FaServer, FaMobile, FaCode } from 'react-icons/fa'
import { SiReact, SiSvelte, SiTailwindcss, SiAstro, SiReactrouter, SiExpress, SiMongodb, SiSqlite, SiFirebase, SiNodeDotJs, SiHtml5, SiCss3, SiJavascript, SiPython, SiJava, SiCpp, SiKotlin, SiGo, SiPhp, SiTypescript, SiFigma, SiAdobe, SiVueDotJs, SiRemixicon, SiAdobexd, SiRemix, SiMongoose } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb"
const iconComponents = {
  react: <SiReact />,
  nextjs: <TbBrandNextjs />,
  remix: <SiRemix />,
  reactrouterdom: <SiReactrouter />,
  svelte: <SiSvelte />,
  astro: <SiAstro />,
  tailwindcss: <SiTailwindcss />,
  express: <SiExpress />,
  mongodb: <SiMongodb />,
  mongoose: <SiMongoose />,
  firebase: <SiFirebase />,
  sql: <SiSqlite />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  php: <SiPhp />,
  go: <SiGo />,
  python: <SiPython />,
  kotlin: <SiKotlin />,
  figma: <SiFigma />,
  adobexd: <SiAdobexd />,

};

export default function StackSection() {
  const [visibility, setVisibility] = useState(false);
  const initialRef = useRef(null);

  function getMiddleItem(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null; // or any default value you prefer
    }

    // Calculate the index of the middle item
    const middleIndex = Math.floor(arr.length / 2);

    // Return the middle item
    return arr[middleIndex];
  }

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
          setVisibility(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(initialRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const [active, setActive] = useState(1);
  const [path, setPath] = useState([
    { name: "Frontend", value: 0, icon: <FaDesktop size={22} /> },
    { name: "Backend", value: 1, icon: <FaServer size={22} /> },
    { name: "Mobile", value: 2, icon: <FaMobile size={22} /> },
    { name: "Languages", value: 3, icon: <FaCode size={22} /> },
  ]);

  const containerRef = useRef();
  const [visibleGrids, setVisibleGrids] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleGrids = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry, index) => Number(entry.target.dataset.index));
        setVisibleGrids([getMiddleItem(newVisibleGrids)]);
      },
      {
        root: container,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed
      }
    );

    const gridElements = Array.from(container.children);
    gridElements.forEach((element, index) => {
      observer.observe(element);
      element.dataset.index = index + 1;
    });


    return () => {
      observer.disconnect();
    };

  });


  return (
    <div ref={initialRef} className="w-full h-[100svh] relative bg-white">
      <div className="w-full h-full absolute top-0 right-0 flex flex-row justify-end overflow-hidden">
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[100ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[200ms]  -mx-2`}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[300ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[400ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[100ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[200ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[300ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[400ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[100ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[200ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[300ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[400ms] `}></div>
      </div>
      <div className="z-10 w-full h-full flex flex-row absolute">
        <div className="flex-1  ">
          <div className={`duration-700 delay-700 ${visibility ? "opacity-100" : "opacity-[0]"} w-screen  h-full items-center justify-center flex flex-col gap-2`}>
            <h1 className="text-3xl font-bold text-white">
              <span className="stack">02</span>
              My Stack
            </h1>
            <div ref={containerRef} className="w-full flex flex-row items-center gap-5 lg:gap-14 overflow-x-auto py-20 px-10 lg:px-20   ">
              {Object.keys(iconComponents).map((val, index) => (
                <div key={index} className={`ease-in-out delay-0 duration-300 ${visibleGrids.includes(index + 1) ? "blockx " : "blockxx"} h-max w-max rounded-xl flex justify-center items-center text-white text-7xl m-auto   relative`}>
                  <div className={`div rounded-xl lg:w-80 lg:h-72 w-44 h-40 flex items-center justify-center `}>

                  </div>
                  <span className="absolute">
                    {iconComponents[val]}
                  </span>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
