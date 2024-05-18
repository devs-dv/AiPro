import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

const Component1 = () => {



  
  return (
    <>
      <div className="bg-[#EFEFEF] flex flex-col">
        {/* <div className="bg-gray-100 dark:bg-gray-800 py-20"> */}
        <div className=" sticky inset-x-0 top-0 z-30  w-full max-w-screen-md  container mx-auto px-4 md:top-6 md:rounded-3xl lg:max-w-screen-lg ">
          <div className="flex flex-row items-center space-x-8 justify-between m-5">
            <div className="flex items-center ">
              <img
                className="h-10 flex-shrink-0"
                src="https://framerusercontent.com/images/LvzWXeOKQdmc9M0ZkQoDU3Z76s.svg"
                alt="AI Lawyer Logo"
              />
              <span className="font-\[#545454\] text-4xl">lawyer</span>
            </div>
            <div className="space-y-48"> </div>
            <FaBars className="md:hidden w-6 h-6" />
            <div class="space-x-14  md:flex max-md:hidden  w-auto container mx-auto px-4 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
              <a
                href="#"
                class="relative group hover:text-gray-600 dark:hover:text-gray-400"
              >
                FAQ
                <span class="block absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                class="relative group hover:text-gray-600 dark:hover:text-gray-400"
              >
                Affiliate
                <span class="block absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                class="relative group hover:text-gray-600 dark:hover:text-gray-400"
              >
                Pricing
                <span class="block absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                class="relative group hover:text-gray-600 dark:hover:text-gray-400"
              >
                Blog
                <span class="block absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                class="relative group hover:text-gray-600 dark:hover:text-gray-400"
              >
                Contact
                <span class="block absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <button className="max-md:hidden space-y-44 bg-yellow-300 text-black font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300">
              Try for Free
            </button>
          </div>
        </div>
        <div className=" md:top-10 md:rounded-3xl px-5 py-5 mx-5 my-5">
          <div className="flex justify-center mt-10 ">
            <button className="bg-gray-700 text-white px-1 py-1 rounded-full flex items-center space-x-2">
              <span className="bg-green-500 text-white font-bold px-2 rounded-full">
                New
              </span>
              <span>Become a Distributor</span>
              <img
                className="small-svg"
                aria-hidden="true"
                alt="arrow"
                src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20256%22%20focusable%3D%22false%22%20color%3D%22var(--token-d3965f8d-ed09-4f81-a06d-765b94d820c1%2C%20rgb(0%2C%20200%2C%2044))%22%20style%3D%22user-select%3A%20none%3B%20width%3A%20100%25%3B%20height%3A%20100%25%3B%20display%3A%20inline-block%3B%20fill%3A%20var(--token-d3965f8d-ed09-4f81-a06d-765b94d820c1%2C%20rgb(0%2C%20200%2C%2044))%3B%20color%3A%20var(--token-d3965f8d-ed09-4f81-a06d-765b94d820c1%2C%20rgb(0%2C%20200%2C%2044))%3B%20flex-shrink%3A%200%3B%22%3E%3Cg%20color%3D%22var(--token-d3965f8d-ed09-4f81-a06d-765b94d820c1%2C%20rgb(0%2C%20200%2C%2044))%22%20weight%3D%22bold%22%3E%3Cpath%20d%3D%22M224.49%2C136.49l-72%2C72a12%2C12%2C0%2C0%2C1-17-17L187%2C140H40a12%2C12%2C0%2C0%2C1%2C0-24H187L135.51%2C64.48a12%2C12%2C0%2C0%2C1%2C17-17l72%2C72A12%2C12%2C0%2C0%2C1%2C224.49%2C136.49Z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
            </button>
          </div>
          <div className="">
            <header className="text-center mt-10">
              <h1 className="text-6xl font-bold max-w-3xl mx-auto max-md:text-4xl">
                AI Lawyer: your personal legal AI assistant
              </h1>
            </header>
          </div>
          {/* </div> */}
          <div className="w-full px-4 py-12 max-w-xl mx-auto">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center">
              <div className="flex flex-row max-md:flex-col gap-8 md:text-left ">
                <div className="">
                  <h2 className="text-xl font-semibold text-center mb-4">
                    for <span className=" text-indigo-500">Consumers:</span>
                  </h2>
                  <p className=" text-center">
                    Say goodbye to expensive legal consultation, long waits for
                    appointments, and confusing legal texts.
                  </p>
                </div>
                <div className=" bg-black w-1 max-md:hidden"></div>
                <div className=" bg-black h-[0.5px] md:hidden"></div>
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-center">
                    for <span className=" text-purple-500">Lawyers:</span>
                  </h2>
                  <p className=" text-center">
                    Say goodbye to routine tasks. AI Lawyer automate your legal
                    research and paperwork, granting you more free time.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-yellow-400 text-zinc-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors">
                  Try for Free
                </button>
              </div>
              <div className="flex flex-col items-center mt-4">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-black hover:-translate-y-2 duration-300"
                    src="https://framerusercontent.com/images/qu3p1CVTcA51hxcrHdp0kWGBv8.png"
                    alt="User 1"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-black hover:-translate-y-2 duration-300"
                    src="https://framerusercontent.com/images/2mXcwauLEfvaNQkLjPpPYVVtos.png"
                    alt="User 2"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-black hover:-translate-y-2 duration-300"
                    src="https://framerusercontent.com/images/TYo9warB47QIM9Qv6K0p163790.png"
                    alt="User 3"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-black hover:-translate-y-2 duration-300"
                    src="https://framerusercontent.com/images/YLdNx7Ji8qI3mK9gRdUlSiNUbHc.png"
                    alt="User 4"
                  />
                </div>
                <div className="text-sm text-zinc-400 mt-2">
                  ★★★★★ 5 stars from 252 users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 z-50">
        <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-md">
          US EN
        </button>
      </div>
    </>
  );
};

export default Component1;
