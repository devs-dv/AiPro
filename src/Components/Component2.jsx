import React from 'react'

const Component2 = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white font-sans">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-6">
            Who is AI Lawyer for?
          </h1>
          <p className="text-lg text-center mb-12">
            Our goal is simple: to make justice widely available. Whether you're
            consumers, practicing law, or studying it, we're here for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="https://via.placeholder.com/100x100.png?text=Icon"
                  alt="AI for Legal Consumers"
                  className="w-20 h-20"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-indigo-400">
                AI for Legal Consumers
              </h2>
              <p>
                From deciphering complex terms to understanding rights, we've
                got you covered.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="https://via.placeholder.com/100x100.png?text=Icon"
                  alt="AI for Lawyers"
                  className="w-20 h-20"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-purple-400">
                AI for Lawyers
              </h2>
              <p>
                Let us handle the research and paperwork while you elevate
                client relationships.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="https://via.placeholder.com/100x100.png?text=Icon"
                  alt="AI for Law Firms"
                  className="w-20 h-20"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-green-400">
                AI for Law Firms
              </h2>
              <p>
                Streamlining processes and boost efficiency, we're
                revolutionizing the way law firms operate.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="https://via.placeholder.com/100x100.png?text=Icon"
                  alt="AI for Law Students"
                  className="w-20 h-20"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-amber-400">
                AI for Law Students
              </h2>
              <p>
                We've made a perfect learning tool. It helping to prepare
                students for a career in law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component2