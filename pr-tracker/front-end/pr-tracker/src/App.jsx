import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Workflow from "./Components/workflow";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <div className="bg-black flex justify-center pl-30 pr-30">
          <Workflow />
        </div>
      </div>
    </>
  );
}

export default App;
