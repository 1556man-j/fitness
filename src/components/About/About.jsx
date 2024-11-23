import React from "react";
import AboutUS from "../../assets/About.jpg";
import { FaDumbbell } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiTarget } from "react-icons/fi";
function About() {
  return (
    <div className="sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container py-16">
        <div className="py-9">
          <h1 className="py-4 font-serif text-4xl font-bold">About Us</h1>
          <p className="items-center px-4 text-lg text-slate-600 lg:text-xl sm:px-6 md:px-8 lg:px-32 xl:px-72">
            Our gym is dedicated to helping you achieve your fitness goals with
            professional trainers and a motivating environment.
          </p>
        </div>
        <div className="grid items-center grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col gap-4 text-left">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl xl:text-6xl">
              About ManJ Fitness
            </h1>
            <p className="text-lg text-slate-600">
              Founded in 2010, ManJ Fitness has been at the forefront of helping
              people achieve their fitness goals. Our state-of-the-art
              facilities, expert trainers, and supportive community create the
              perfect environment for your fitness journey.
            </p>
            <div className="flex flex-col gap-5 pt-6 lg:grid lg:grid-cols-2">
              <button className="py-3 text-lg font-medium text-white bg-black rounded-md">
                Our Story
              </button>
              <button className="py-3 text-lg font-medium text-white bg-red-500 rounded-md">
                Meet Out Trainers
              </button>
            </div>
          </div>
          <img alt="about us" src={AboutUS} className="rounded-lg" />
        </div>
        <div className="grid grid-cols-1 gap-10 pt-20 lg:grid-cols-3">
          <div className="flex flex-col gap-4 py-6 bg-white px-14 lg:px-5">
            <div className="flex justify-center">
              <FaDumbbell className="text-6xl text-red-700 rotate-45" />
            </div>
            <h1 className="text-2xl font-bold">Our Mission</h1>
            <p className="text-slate-600">
              To inspire and empower individuals to reach their full potential
              through fitness, fostering a healthier and happier community.
            </p>
          </div>
          <div className="flex flex-col gap-4 py-6 bg-white px-14 lg:px-5">
            <div className="flex justify-center">
              <HiOutlineUserGroup className="text-6xl text-red-700" />
            </div>
            <h1 className="text-2xl font-bold">Our Community</h1>
            <p className="text-slate-600">
              We pride ourselves on creating a welcoming, inclusive environment
              where members support and motivate each other to achieve their
              goals.
            </p>
          </div>
          <div className="flex flex-col gap-4 py-6 bg-white px-14 lg:px-5">
            <div className="flex justify-center">
              <FiTarget className="text-6xl text-red-700" />
            </div>
            <h1 className="text-2xl font-bold">Our Approach</h1>
            <p className="text-slate-600">
              We combine cutting-edge equipment, personalized training programs,
              and nutritional guidance to help you achieve sustainable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
