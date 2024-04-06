import Card1 from "./Card1";
import Container1 from "./Container1";

export default function Features() {
  return (
    <>
      <div className="ml-10 pl-5 text-left text-4xl text-[#131b20] font-semibold mb-5">
        Streamlining Remote Healthcare Diagnosis
      </div>
      <div className="ml-10 pl-5 max-w-xl text-left">
        Four steps simplified procedure to streamline remote healthcare
        accessibility:
      </div>
      <div className="features flex flex-col md:flex-row justify-center items-center  lg:mx-20 md:mx-10 sm:mx-5 md:space-x-10 text-left xl:space-x-20  sm:flex-col sm:max-h-fit lg:space-x-10">
        <div className="left flex flex-col">
          <div className="cards">
            <Card1
              title="Booth-Based Facilitation"
              text="We establish facilitator-equipped booths in remote areas staffed by trained personnel to assist individuals in utilizing MediSense."
              link="http://localhost:3000/facilitator/signup"
              linkName="Sign Up as a Facilitator"
            />
            <Card1
              title="Input Methods"
              text="Facilitator gather patient information like symptom descriptions and medical images, ensuring comprehensive data collection for precise analysis."
              link="https://www.google.com"
              linkName="Our Input Guidelines and Methodology"
            />
            <Card1
              title="Problem Report Compilation"
              text="AI  will then utilize collected data to generate detailed problem reports containing essential diagnostic information."
              link="https://www.google.com"
              linkName="Learn More"
            />
            <Card1
              title="Doctor Communication"
              text="Problem reports is then transferred to designated doctors, enabling timely diagnosis and prioritization of patients for further consultation."
              link="https://www.google.com"
              linkName="View Our Doctor Network"
            />
          </div>
        </div>
        <div className="right flex flex-col items-center justify-center">
          {" "}
          {/* Continue ... */}
          <Container1 />
        </div>
      </div>
    </>
  );
}
