import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { PiBankBold } from "react-icons/pi";
import { LuBookOpen } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";


const Component2 = () => {
  return (
    <div className="bg-[#EFEFEF] min-h-screen text-black font-sans py-20">
      <div className="flex justify-center items-center py-6">
        <div className="inline-flex justify-center items-center text-md text-purple-500 border border-gray-300 p-1 rounded-3xl">
          <LuUsers2 className="mr-2" />
          Users
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 ">
        <h1 className="text-4xl font-bold text-center mb-6">
          Who is AI Lawyer for?
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-center mb-12 text-gray-500 text-xl">
            Our goal is simple: to make justice widely available. Whether you're
            consumers, practicing law, or studying it, we're here for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <CgProfile className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-indigo-400">
              AI for Legal Consumers
            </h2>
            <p className="mb-4">
              From deciphering complex terms to understanding rights, we've got
              you covered.
            </p>
            <img
              src="/one.png"
              alt="AI for Legal Consumers"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <FaBalanceScaleLeft className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-purple-400">
              AI for Lawyers
            </h2>
            <p className="mb-4">
              Let us handle the research and paperwork while you elevate client
              relationships.
            </p>
            <img
              src="/two.png"
              alt="AI for Lawyers"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <PiBankBold className="w-10 h-10 " />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-green-400">
              AI for Law Firms
            </h2>
            <p className="mb-4">
              Streamlining processes and boosting efficiency, we're
              revolutionizing the way law firms operate.
            </p>
            <img
              src="/three.png"
              alt="AI for Law Firms"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <LuBookOpen className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-amber-400">
              AI for Law Students
            </h2>
            <p className="mb-4">
              We've made a perfect learning tool, helping to prepare students
              for a career in law.
            </p>
            <img
              src="/four.png"
              alt="AI for Law Students"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component2;
