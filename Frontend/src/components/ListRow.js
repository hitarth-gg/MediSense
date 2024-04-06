// export default function ListRow({name, age, sex, presentCase, pastHistory, durationOfSymptoms, physicalExamination, remarks, status}) {
import Table from "./Table";
import { useState } from "react";
import axios from "axios";
export default function ListRow({
  name,
  age,
  sex,
  presentCase,
  pastHistory,
  durationOfSymptoms,
  physicalExamination,
  remarks,
  status,
}) {
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };

  const [isOpen, setIsOpen] = useState(false);
  // const [response, setResponse] = useState([]);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  // const [response, setResponse] = useState([]);
  // const handleClick = () => {
  //   async function fetchData() {
  //     try {
  //       setResponse(
  //         await axios.get(`http://127.0.0.1:5004/api/data?name=${name}`)
  //       );
  //       console.log(response);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
  // };

  const response = [
    ["Age", "28-year-old", "0.9972822070121765"],
    ["History", "previously healthy", "0.9990726113319397"],
    ["Sex", "man", "0.999725878238678"],
    ["Clinical_event", "presented", "0.9996563196182251"],
    ["Duration", "6-week", "0.9965295195579529"],
    ["Sign_symptom", "palpitations", "0.9998781681060791"],
    ["Coreference", "symptoms", "0.9989033937454224"],
    ["Frequency", "2-3 times", "0.8818286061286926"],
    ["Detailed_description", "up symptoms to 30 mi...", "0.9997408986091614"],
    ["Lab_value", "grade 2/6", "0.9998769760131836"],
    ["Detailed_description", "holosystolic", "0.9999765157699585"],
    ["Biological_structure", "tricuspid", "0.9997997283935547"],
    ["Sign_symptom", "regurgitation murmur", "0.9514440894126892"],
    ["Biological_structure", "left sternal border", "0.9999346733093262"],
    ["Diagnostic_procedure", "physical examination", "0.9998975992202759"],
    ["Lab_value", "unremarkable", "0.958421528339386"],
  ];

  return (
    <div
      className={
        isOpen
          ? `card2 border-2 flex flex-col rounded-md border-[#dee8ef] justify-center items-center transition-all ease-in-out duration-150 my-1 p-1 hover:border-[#55a6f6] hover:bg-[#ebf5fe] text-sm text-[hsl(211,15%,35%)] space-x-20`
          : ""
      }
    >
      <div className="animate-slidein opacity-0 card2 border-2 flex flex-row rounded-md border-[#dee8ef] justify-between items-center transition-all ease-in-out duration-150 my-5 p-5 hover:border-[#55a6f6] hover:bg-[#ebf5fe] text-sm text-[#4c5967] space-x-20">
        {/* --------------------------------- */}

        <div className="one">
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Name:</p>
            <p>{name}</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Age:</p>
            <p>{age}</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Sex:</p>
            <p>{sex}</p>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="one">
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Present Case:</p>
            <p>{truncateString(presentCase, 40)}</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Past History:</p>
            <p>{pastHistory}</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Duration of Symptoms:</p>
            <p>{durationOfSymptoms}</p>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="one">
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Physical Examination:</p>
            <p>{physicalExamination}</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Remarks:</p>
            <p>{remarks}</p>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="one">
          <div className="flex flex-row space-x-2">
            <div className="min-w-2 border-2 text-[.8rem] rounded-lg px-2 py-1 bg-green-100 border-green-300 ">
              {/* Not Eval Eval, Assigned */}
              {status}
            </div>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="one">
          <div className="flex flex-row space-x-2">
            <div
              onClick={handleClick}
              // onClick={handleModelApi}
              className="relative cursor-pointer px-5 py-2 font-medium text-white transition duration-300 bg-blue-400 rounded-md hover:bg-blue-500 ease"
            >
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  className="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fill-rule="nonzero"
                    fill-opacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  className="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fill-rule="nonzero"
                    fill-opacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="relative">Analysis</span>
            </div>
          </div>
        </div>
        {/* --------------------------------- */}
      </div>
      {isOpen ? (
        <div>
          {response.map((el) => {
            return <Table el={el} />;
          })}
        </div>
      ) : null}
    </div>
  );
}
