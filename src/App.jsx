import { useState } from 'react'
import './App.css'
import Component3 from './Components/Component3';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';

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
      <Component1/>
      <Component2/>
      
    </>
  );
}

export default App
