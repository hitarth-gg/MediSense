import SearchBox from "./SearchBox";
import "./css/Style10.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-[#ffffff60] backdrop-blur-md p-4 text-[#1b1b1b] sticky flex justify-between">
      {" "}
      {/* static or fixed + relative or absolute*/}
      <div className="left flex justify-start items-center space-x-6 ">
        <NavLink to="/">
          <img
            className="h-5 mx-2"
            src="https://imgur.com/9iliXyo.jpeg"
            alt="logo"
          />{" "}
        </NavLink>
        <div className="headings style-10 cursor-pointer">About</div>
        <div className="headings style-10 cursor-pointer">Features</div>
        <div className="headings style-10 cursor-pointer">How It Works</div>
        <div className="headings style-10 cursor-pointer">Blog</div>
      </div>
      <div className="right flex justify-center items-center   ">
        <SearchBox />
        <div className="languageBox flex items-center justify-center ease-in-out transition-all duration-150 cursor-pointer hover:text-blue-400 hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
            />
          </svg>
          language
        </div>
      </div>
    </div>
  );
}
