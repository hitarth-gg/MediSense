import Card1 from "./Card1";
import Container1 from "./Container1";

export default function Features() {
  return (
    <div className="features flex flex-col md:flex-row justify-center items-center  lg:mx-20 md:mx-10 sm:mx-5 md:space-x-10 text-left xl:space-x-20  sm:flex-col sm:max-h-fit lg:space-x-10">
      <div className="left flex flex-col">
        <div className=" text-4xl text-[#131b20] font-semibold mb-5">
          Product Features
        </div>
        <div className="max-w-xl text-left">
          Here you can provide a brief overview of the key features of the
          product. For example, you could list the number of features, the types
          of features, add-ons, or the benefits of the features
        </div>
        <div className="cards">
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </div>
      <div className="right flex flex-col items-center justify-center"> {/* Continue ... */}
        <Container1 />
      </div>
    </div>
  );
}
