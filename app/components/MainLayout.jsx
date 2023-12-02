"use client";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <html data-theme="dark" lang="en">
      <body className="w-full h-screen overflow-x-hidden overflow-y-auto relative bg-black">
        {children}
      </body>
    </html>
  );
}
