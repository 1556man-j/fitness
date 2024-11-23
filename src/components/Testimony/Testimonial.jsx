import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import user1 from "../../assets/me.png";
import user2 from "../../assets/mine.png";
import user3 from "../../assets/mmm.png";
import user4 from "../../assets/user8.png";



function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Example Corp",
      image: user1,
      feedback:
        "This service is fantastic! It has significantly improved our workflow and saved us a lot of time.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketing Manager, Acme Inc",
      image: user4,
      feedback:
        "I highly recommend it to anyone looking for efficiency and quality. Truly outstanding!",
    },
    {
      id: 3,
      name: "Robert Brown",
      role: "Developer, Tech Solutions",
      image: user2,
      feedback:
        "The support team was super helpful, and the product itself is top-notch. Very satisfied!",
    },
    {
      id: 4,
      name: "Robert Brown",
      role: "Developer, Tech Solutions",
      image: user3,
      feedback:
        "The support team was super helpful, and the product itself is top-notch. Very satisfied!",
    },
  ];

  return (
    <div>
      <div className="sm:min-h-[680px] sm:grid sm:place-items-center bg-white py-10">
        <div className="container flex flex-col">
          <h1 className="mb-6 font-serif text-4xl font-bold">Testimonials</h1>
          <p className="items-center px-4 text-lg sm:px-6 md:px-8 lg:px-32 xl:px-72 text-slate-600 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            perspiciatis amet voluptate libero reprehenderit, repellendus
            aliquam vero. Unde, harum assumenda!
          </p>
        </div>
        <div>
        <div className="z-40 w-full max-w-3xl px-8 py-10 mx-auto md:px-4 lg:max-w-5xl xl:max-w-6xl">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // Default for small screens
        loop= {true}
        touchRatio={1} 
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Large screens
        }}
        pagination={{ clickable: true,
           el: ".swiper-pagination",
         }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="testimonial-swiper"
      >
        {testimonials.map(({ id, name, role, image, feedback }) => (
          <SwiperSlide key={id}>
            <div className="flex flex-col items-center p-6 text-center bg-[#F1F5F9] rounded-lg shadow-red-500">
              <img
                src={image}
                alt={name}
                className="w-24 h-24 mb-4 border-4 border-gray-300 rounded-full"
              />
              <p className="mb-4 text-lg italic text-gray-600">"{feedback}"</p>
              <h4 className="text-xl font-semibold">{name}</h4>
              <span className="text-sm text-gray-500">{role}</span>
            </div>
          </SwiperSlide>
        ))}
        <div className="text-red-500 pt-28 swiper-pagination"></div>
      </Swiper>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
