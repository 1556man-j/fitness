import React, { useState, useEffect } from "react";
import banner from "../../assets/banner.jpg"; // Larger image
import smallBanner from "../../assets/banner-mobile.jpg"; // Smaller image for mobile
import { FaBiking, FaDumbbell, FaHeart } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";

function Services() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // Add event listener for screen resize
    window.addEventListener("resize", handleResize);

    // Check the initial screen size on load
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bannerImg = {
    backgroundImage: `url(${isSmallScreen ? smallBanner : banner})`, // Dynamically set image
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={bannerImg}
      className="min-h-[680px] sm:grid sm:place-items-center relative text-white place-items-center grid"
    >
      <div className="bg-black opacity-20 absolute top-0 right-0 w-[100%] z-10 min-h-[680px]"></div>
      <div className="container relative z-20 grid md:grid-cols-2">
        <div className="grid gap-8 py-20 place-items-center">
          <h1 className="font-serif text-4xl font-bold">Our Services</h1>
          <div className="grid grid-cols-2 gap-8 text-center place-items-center md:text-left">
            <div className="flex flex-col justify-center gap-3 text-center md:text-left md:flex md:flex-row">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-red-700 bg-white rounded-full w-14 h-14">
                  <FaDumbbell className="text-3xl text-red-700 rotate-45" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold">Strength Training</h2>
                <p className="text-slate-300">
                  Build muscle and increase your strength with our expert-led
                  weight training programs.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 text-center md:text-left md:flex md:flex-row">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-red-700 bg-white rounded-full w-14 h-14">
                  <HiOutlineUserGroup className="text-3xl text-red-700" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold">Group classes</h2>
                <p className="text-slate-300">
                  Join our energetic group classes for a fun and motivating
                  workout experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 text-center md:text-left md:flex md:flex-row">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center text-red-700 bg-white rounded-full w-14 h-14">
                    <FaHeart className="text-3xl text-red-700" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold">Cardio Fitness</h2>
                <p className="text-slate-300">
                  Improve your cardiovascular health with our state-of-the-art
                  cardio equipment and classes.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 text-center md:text-left md:flex md:flex-row">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-red-700 bg-white rounded-full w-14 h-14">
                  <FaBiking className="text-3xl text-red-700" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold">Spin Classes</h2>
                <p className="text-slate-300">
                  Pedal your way to fitness with our high-intensity spin classes
                  led by certified instructors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
