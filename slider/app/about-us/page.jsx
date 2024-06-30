"use client";
import Navbar from "@/components/navbar/Navbar";
import Slider from "@/components/slider/Slider";
import { useState } from "react";

export default function AboutUs() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleHandle={toggleHandle} />
      <div className="flex">
        <Slider isToggle={isToggle} />
        <div className="flex w-full items-center justify-center p-4 slider-height overflow-x-hidden overflow-auto">
          <h1 className="text-4xl font-bold text-red-400">This is upcoming about us page...</h1>
        </div>
      </div>
    </div>
  );
}
