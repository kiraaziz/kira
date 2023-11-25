"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import MeSection from "./components/MeSection.jsx";
import StackSection from "./components/StackSection.jsx";

export default function Home() {
  return (
    <ReactFullpage
      scrollingSpeed={300}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section h-full">
              <MeSection />
            </div>
            <div className="section h-full">
              <StackSection />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
