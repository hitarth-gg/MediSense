import Button1 from "./Button1";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="hero">
      {/* <img src={ darkBgImg } alt="ad" /> */}

      <div className="welcome border-red-600 border-3 h-screen flex flex-col justify-center items-center">
        {" "}
        {/* bg-[#00000040] */}
        <div className="animate-slidein opacity-0 flex flex-row text-5xl text-[#131b20] font-semibold mb-5 ">
          Welcome to
          <div className="text-[#4876ee]">‎ MediSense</div>
        </div>
        <div className="max-w-xl animate-slidein500 opacity-0">
          <Typewriter
            options={{
              strings: [
                "Revolutionizing Remote Healthcare Accessibility with AI",
                "Empowering Doctors with AI-driven Insights",
                "Sign up as a facilitator for your region",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
        <div className="backdrop-blur-xl font-semibold blurclass bg-transparent p-15 animate-slidein700 p-6 rounded-lg border border-[#55a6f6] mt-8 bg-opacity-95 ">
          Sign up/Login as a:
          <div className="customButtons m-10 flex space-x-10">
            <NavLink to="/login">
              <Button1 text={"Facilitator"} />{" "}
            </NavLink>
            <NavLink to="/login">
              <Button1 text={"Doctor"} />{" "}
            </NavLink>
          </div>
        </div>
      </div>

      {/* ---------------------- gradient ---------------------- */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      {/* ------------------------------------------------------ */}
    </div>
  );
}
