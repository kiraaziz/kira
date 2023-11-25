"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [NavbarVisibility, setNavbarVisibility] = useState(true);
  const initialNavbarRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: "0px", // no margin
      threshold: 0.5, // 50% of the element must be visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // The #initialNavbar is visible
          setNavbarVisibility(true);
        } else {
          // The #initialNavbar is not visible
          setNavbarVisibility(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(initialNavbarRef.current);

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        id="initialNavbar"
        ref={initialNavbarRef}
        className="navbar bg-base-300 p-5 text-white overflow-hidden"
      >
        <h1 className="navbar-start text-lg font-medium" >Kira Aziz</h1>
      </div>
    </>
  );
}
