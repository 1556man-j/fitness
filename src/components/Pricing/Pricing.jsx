import React from "react";

function Pricing() {
  return (
    <div className="sm:min-h-[680px] sm:grid sm:place-items-center">
      <div className="container flex flex-col gap-20 py-20">
        <div>
          <h1 className="mb-6 font-serif text-4xl font-bold">
            Membership Pricing
          </h1>
          <p className="items-center px-4 text-lg sm:px-6 md:px-8 lg:px-32 xl:px-72 text-slate-600 lg:text-xl">
            Whether you’re looking for more information or just want to send us
            a message, feel free to reach out. We’d love to hear from you!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-5 px-8 py-6 text-left border rounded-lg md:px-6 border-slate-300">
            <div>
              <h2 className="text-2xl font-bold">Basic</h2>
              <p className="text-slate-600">For casual gym-goers</p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">$29.99/Mo</h1>
              <ul className="text-slate-900">
                <li>Access to Gym Equipment</li>
                <li>Locker Room Access</li>
                <li>Free Weight Area</li>
              </ul>
              <button className="px-4 py-2 font-bold text-white bg-black rounded-md ">
                <a href="#contact">Choose Plan</a>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 px-8 py-6 text-left border rounded-lg md:px-6 border-slate-300">
            <div>
              <h2 className="text-2xl font-bold">Pro</h2>
              <p className="text-slate-600">For serious fitness enthusiasm</p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">$40.09/Mo</h1>
              <ul className="text-slate-900">
                <li>All Basic Features</li>
                <li>UGroup Fitness Classes</li>
                <li>Personalized Workout Plan</li>
              </ul>
              <button className="px-4 py-2 font-bold text-white bg-black rounded-md">
              <a href="#contact">Choose Plan</a>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 px-6 py-8 text-left border rounded-lg border-slate-300 md:px-6">
            <div>
              <h2 className="text-2xl font-bold">Elite</h2>
              <p className="text-slate-600">For casual gym-goers</p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">$65.00/Mo</h1>
              <ul className="text-slate-900">
                <li>All Pro Features</li>
                <li>Personal Training Session</li>
                <li>Nutrition Consultation</li>
              </ul>
              <button className="px-4 py-2 font-bold text-white bg-black rounded-md">
              <a href="#contact">Choose Plan</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
