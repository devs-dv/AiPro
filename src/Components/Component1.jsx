import React from 'react'

const Component1 = () => {
  return (
    <>
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
      <div className=" inset-x-0  flex justify-center items-center h- bg-white dark:bg-zinc-800">
        <button className="bg-zinc-700 text-white px-6 py-2 rounded-full flex items-center space-x-2">
          <span className="bg-green-500 text-white font-bold px-2 py-1 rounded-full">
            New
          </span>
          <span>Become a Distributor</span>
          {/* <img alt="arrow" src="https://placehold.co/20" /> */}
          <img
            className="small-svg"
            aria-hidden="true"
            alt="arrow"
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20256%22%20focusable%3D%22false%22%20color%3D%22var(--token-d3965f8d-ed09-4f81-a06d-765b94d820c1%2C%20rgb(0%2C%20200%2C%2044))%22%20style%3D%22user-select%3A%20none%3B%20width%3A%20100%25%3B%20height%3A%20100%25%3B%20display%3A%20inline-block%3B%20fill%3A%20var(--token-d3965f8d-ed09-4f81-a06d-765b94d820c1%2C%20rgb(0%2C%20200%2C%2044))%3B%20color%3A%20var(--token-d3965f8d-ed09-4f81-a06d-765b94d820c1%2C%20rgb(0%2C%20200%2C%2044))%3B%20flex-shrink%3A%200%3B%22%3E%3Cg%20color%3D%22var(--token-d3965f8d-ed09-4f81-a06d-765b94d820c1%2C%20rgb(0%2C%20200%2C%2044))%22%20weight%3D%22bold%22%3E%3Cpath%20d%3D%22M224.49%2C136.49l-72%2C72a12%2C12%2C0%2C0%2C1-17-17L187%2C140H40a12%2C12%2C0%2C0%2C1%2C0-24H187L135.51%2C64.48a12%2C12%2C0%2C0%2C1%2C17-17l72%2C72A12%2C12%2C0%2C0%2C1%2C224.49%2C136.49Z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            // class="filter invert"
          />{" "}
        </button>
      </div>

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
      <div className="fixed bottom-4 left-4 z-50">
        <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-md">
          US EN
        </button>
      </div>
    </>
  );
}

export default Component1