"use client";
import React, { useEffect, useRef, useState } from "react"
import frameworks from "@/data/farmework.js"

export default function StackSection() {
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
    { name: "Frontend", value: 0 },
    { name: "Backend", value: 1 },
    { name: "Mobile", value: 2 },
    { name: "Languges", value: 3 },
  ]);

  return (
    <div ref={initialRef} className="w-full h-[100svh] relative bg-purple-400">
      <div className="w-full h-full absolute top-0 right-0 flex flex-row justify-end overflow-hidden">
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[100ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[200ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[300ms] `}></div>
        <div className={`${visibility ? "h-[120svh]" : "h-0"} rounded-b-full bg-black w-44 ease-in-out duration-500 delay-[400ms] `}></div>
      </div>
      <div className="z-10 w-full h-full flex flex-col absolute">
        <div className="w-full flex items-center justify-center flex-row gap-10 h-[20%] text-white">
          {path.map((val) => (
            <button onClick={()=>{setActive(val.value)}} className={`text- px-6 py-1`}>{val.name}</button>

          ))}
        </div>
        <div className="w-full h-[80%] flex flex-row overflow-x-auto items-center gap-6 px-56">
          {frameworks.map((val, index) => (
            val.type == active && <div className={`w-96 h-80 items-center justify-center flex ease-in-out duration-1000 backdrop-blur-xl rounded-xl border-4 border-purple-white relative group`}>
              <img src={`/icons/framework/${val.name}.svg`} className=" group-hover:scale-125 ease-in-out duration-200 w-full h-full absolute top-0 right-0 blur-[40px] -z-10" />
              <div className={`w-96 h-80 items-center justify-center flex`}>
                <img src={`/icons/framework/${val.name}.svg`} className="h-56 w-56" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
