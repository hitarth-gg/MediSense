import React from 'react';

export default function Card1({ title, text, link, linkName }) {
  return (
    <div className="card border-2 rounded-lg border-[#dee8ef] flex justify-center transition-all ease-in-out duration-150 items-center space-x-7 px-5 my-5 p-5 hover:border-[#55a6f6] hover:bg-[#ebf5fe]">
      <div className="left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#4c5967"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
          />
        </svg>
      </div>
      <div className="right text-left space-y-1 max-w-lg">
        <div className="title text-[#131b20] font-semibold "> {title} </div>
        <div className="body text-[#4c5967] "> {text} </div>
        <a href={link} className="body text-[#0959aa] font-semibold"> {linkName} </a>
      </div>
    </div>
  );
}
