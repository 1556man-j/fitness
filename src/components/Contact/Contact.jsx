import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <div className="sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container flex flex-col gap-10">
        <div>
          <h1 className="py-4 font-serif text-4xl font-bold">Get in Touch</h1>
          <p className="items-center px-4 text-lg text-slate-600 sm:px-6 md:px-8 lg:px-32 xl:px-72 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium maiores aut dolores quo asperiores iste, id consequatur
            dolorum deleniti quod!
          </p>
        </div>
        <div className="grid md:gap-16 md:grid-cols-3 md:place-items-center">
          <div className="flex flex-col gap-3 px-6 mb-10 text-lg text-left bg-white rounded-lg md:col-span-1 py-7 md:w-full">
            <div className="flex flex-col gap-3">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="px-2 py-3 border rounded-md"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="px-2 py-3 border rounded-md"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Message</label>
              <textarea
                type="text"
                placeholder="Your message here..."
                className="px-2 py-3 border rounded-md pb-14"
              />
            </div>
          </div>
          <div className="flex flex-col items-center px-6 py-10 mb-10 text-lg text-left bg-white rounded-lg md:w-full ga:p-3 md:col-span-2 lg:grid lg:grid-cols-2">
            <div>
              <h1 className="py-4 font-serif text-4xl font-bold">
                Our Location
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <GoLocation className="text-4xl text-red-700" />
                  123 Fitness Avenue, Muscle City, Workout State 12345
                </li>
                <li className="flex items-center gap-3">
                  <AiOutlinePhone className="text-2xl text-red-700" />
                  Phone: (123) 456-7890
                </li>
                <li className="flex items-center gap-3">
                  <HiOutlineMail className="text-2xl text-red-700" />
                  Email: manjesus@fitbodygym.com
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center pt-16">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.34900720607!2d144.963057615315!3d-37.81361197975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614036073571!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
                className="w-full border-0 h-72 rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
