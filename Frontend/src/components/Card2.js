import { Link } from "react-router-dom";
import { useState } from "react";

export default function Card2({ op, title, body, url, btntext }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card2 border-2 rounded-lg border-[#dee8ef] hover:border-[#55a6f6] hover:bg-[#ebf5fe] text-left space-y-1 max-w-lg">
      <div className="p-5">
        <div className="text-[#131b20] font-semibold">{title}</div>
        <div className="text-[#4c5967]">{body}</div>
      </div>
      <div className="pb-3 pr-3 flex justify-end">
        <Link className="nav-link" to={url}>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative inline-flex items-center gap-2 transition-colors duration-300 ${
              isHovered
                ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white border border-blue-600"
                : "bg-white text-black border border-blue-600"
            } rounded-full px-4 py-2`}
          >
            {`${op==="doctor"?btntext:"Proceed to enter details"}`}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke={isHovered ? "white" : "currentColor"}
              className="h-5 w-5 transition-colors duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            {isHovered && (
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                style={{
                  width: "100%",
                  height: "100%",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  zIndex: -1,
                }}
              />
            )}
          </button>
        </Link>
      </div>
    </div>
  );
}
