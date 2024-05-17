import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      {/* <nav className="flex items-center justify-between bg-zinc-900 p-4">
          <div className="flex items-center">
            <img
              src="https://placehold.co/50"
              alt="Logo"
              className="h-8 mr-2"
            />
            <span className="text-white text-lg font-bold">Your Logo</span>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg">
            Click me
          </button>
        </nav> */}
      {/* --- name: AI Lawyer Navbar emoji: 🧑‍⚖️ --- */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-purple-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="font-bold text-xl">ailawyer</span>
        </div>
        <div className="space-x-4 hidden md:flex">
          <a href="#" className="hover:text-zinc-300">
            FAQ
          </a>
          <a href="#" className="hover:text-zinc-300">
            Affiliate
          </a>
          <a href="#" className="hover:text-zinc-300">
            Pricing
          </a>
          <a href="#" className="hover:text-zinc-300">
            Blog
          </a>
          <a href="#" className="hover:text-zinc-300">
            Contact
          </a>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
          Try for Free
        </button>
      </nav>
      <header className="text-center p-20">
        <h1 className="text-6xl font-bold">
          AI Lawyer: your personal legal AI assistant
        </h1>
      </header>
      <div className="bg-zinc-900 text-white w-full px-4 py-12">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-xl font-semibold mb-4">for Consumers:</h2>
              <p>
                Say goodbye to expensive legal consultation, long waits for
                appointments, and confusing legal texts.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">for Lawyers:</h2>
              <p>
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
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://placehold.co/40x40"
                alt="User 1"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://placehold.co/40x40"
                alt="User 2"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://placehold.co/40x40"
                alt="User 3"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://placehold.co/40x40"
                alt="User 4"
              />
            </div>
            <div className="text-sm text-zinc-400 mt-2">
              ★★★★★ 5 stars from 252 users
            </div>
          </div>
        </div>
      </div>

      {/* <div className="min-h-screen bg=[#2C2D31] text-white flex flex-col items-center">
        <header className="w-full flex justify-between p-4 bg-gray-800">
          <div className="text-xl font-bold">AI Lawyer</div>
          <nav className="space-x-4">
            <a href="#faq" className="hover:text-gray-400">
              FAQ
            </a>
            <a href="#affiliate" className="hover:text-gray-400">
              Affiliate
            </a>
            <a href="#pricing" className="hover:text-gray-400">
              Pricing
            </a>
            <a href="#blog" className="hover:text-gray-400">
              Blog
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
          <div className="mt-12">
            <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-600 transition">
              Try for Free
            </button>
          </div>
        </header>
        <main className="flex flex-col items-center flex-1">
          <h1 className="text-5xl font-bold mt-16">
            AI Lawyer: your personal legal AI assistant
          </h1>
          <div className="flex space-x-8 mt-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold">for Consumers:</h2>
              <p className="mt-4 max-w-sm">
                Say goodbye to expensive legal consultation, long waits for
                appointments, and confusing legal texts.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold">for Lawyers:</h2>
              <p className="mt-4 max-w-sm">
                Say goodbye to routine tasks. AI Lawyer automates your legal
                research and paperwork, granting you more free time.
              </p>
            </div>
          </div>
        </main>
        <footer className="w-full flex justify-between p-4 bg-gray-800 mt-auto">
          <div className="text-gray-400">© 2024 AI Lawyer</div>
          <div className="flex space-x-4">
            <span className="cursor-pointer">US</span>
            <span className="cursor-pointer">EN</span>
          </div>
        </footer>
      </div> */}

      {/* this is Your Component . satya  */}
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

export default App
