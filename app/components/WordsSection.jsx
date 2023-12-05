"use client";
import React, { useEffect, useRef, useState } from "react";
import projcts from "@/data/projects.json"

export default function WordsSection() {
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

  return (
    <div
      ref={initialRef}
      className="w-full h-[100svh] flex flex-wrap overflow-auto relative flex-col "
    >
      {projcts.map((val) => {
        return (
          <div className="border w-1/3 h-1/2">
            <div className="hover:[blockx] h-full w-full rounded-none">
              <div className="div h-full w-full">
                {JSON.stringify(val)}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
