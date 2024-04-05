export default function ListRow() {
    return (
        <div className="animate-slidein opacity-0 card2 border-2 flex flex-row rounded-md border-[#dee8ef] justify-start items-center transition-all ease-in-out duration-150 my-5 p-5 hover:border-[#55a6f6] hover:bg-[#ebf5fe] text-sm text-[#4c5967] space-x-20">
        {/* --------------------------------- */}

        <div className="one">
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Name:</p>
            <p>Dev Darshan</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Age:</p>
            <p>27</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Sex:</p>
            <p>Male</p>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="one">
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Present Case:</p>
            <p>Palpitations, Asdas, Asdasd</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Past History:</p>
            <p>Healthy</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Duration of Symptoms:</p>
            <p>2 Weeks</p>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="one">
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Physical Examination:</p>
            <p>Palpitations, Asdas, Asdasd</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold">Remarks:</p>
            <p>Healthy</p>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="one">
          <div className="flex flex-row space-x-2">
            <div className="min-w-2 border-2 text-[.8rem] rounded-lg px-2 py-1 bg-green-100 border-green-300 ">
              Not Eval {/* Eval, Assigned */}
            </div>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="one">
          <div className="flex flex-row space-x-2">
            <a
              href="#_"
              class="relative px-5 py-2 font-medium text-white transition duration-300 bg-blue-400 rounded-md hover:bg-blue-500 ease"
            >
              <span class="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  class="w-auto h-full opacity-100 object-stretch"
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
              <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  class="object-cover w-full h-full"
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
              <span class="relative">Button Text</span>
            </a>
          </div>
        </div>
        {/* --------------------------------- */}
      </div>
    );
}
