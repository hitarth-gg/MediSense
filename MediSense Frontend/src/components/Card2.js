import { Link, Navigate } from "react-router-dom";
export default function Card2({ url }) {

  return (
    <Link className="nav-link" to={url}>
      <div
        className="card2 border-2 flex flex-col rounded-lg border-[#dee8ef] justify-start transition-all ease-in-out duration-150 items-start space-x-7 my-5 p-5 hover:border-[#55a6f6] hover:bg-[#ebf5fe] text-left space-y-1 max-w-lg"
      >
        <div className=" text-[#131b20] mx-6 font-semibold">Title</div>
        <div className="body text-[#4c5967]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum culpa
          modi ducimus repudiandae, optio iure.
        </div>
      </div>
    </Link>
  );
}
