"use client";
import Navbar from "@/components/navbar/Navbar";
import Slider from "@/components/slider/Slider";
import { useState, useEffect } from "react";

export default function Help() {
  const [isToggle, setIsToggle] = useState(true);

  const toggleHandle = () => {
    setIsToggle(!isToggle);
  };

  // Function to check if the device is mobile
  const isMobileDevice = () => window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    // Set isToggle to false if the device is mobile
    if (isMobileDevice()) {
      setIsToggle(false);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleHandle={toggleHandle} />
      <div className="flex">
        <Slider isToggle={isToggle} page='help'/>
        <div className="flex w-full items-center justify-center p-4 slider-height overflow-x-hidden overflow-auto">
          <h1 className="text-4xl font-bold text-yellow-400">This is upcoming help page...</h1>
        </div>
      </div>
    </div>
  );
}
