import React, { useState, useEffect } from "react";
import wallpaper from "../../assets/hero.jpg"; // Image for larger screens
import smallWallpaper from "../../assets/hero-mobile.jpg"; // Image for smaller screens

function Hero() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Check initial screen size
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="min-h-[100vh] bg-cover bg-center relative text-white grid place-items-center"
      style={{
        backgroundImage: `url(${isSmallScreen ? smallWallpaper : wallpaper})`,
      }}
    >
      <div className="bg-black opacity-40 min-h-[100vh] absolute top-0 right-0 w-[100%] z-10 "></div>
      <div className="container relative z-20 md:text-left md:grid md:grid-cols-2">
        <div className="flex flex-col px-16 gap-9">
          <div className="pt-20 text-5xl font-bold md:text-6xl ">
            Your fitness Journey Begins!
          </div>
          <div className="text-sm">
            Join us today and start your fitness journey with expert trainers
            and state-of-the-art facilities.
          </div>
          <button className="py-5 text-lg font-semibold uppercase border-2 rounded-sm cursor-pointer hover:bg-white hover:text-black">
            <a href="#about">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
