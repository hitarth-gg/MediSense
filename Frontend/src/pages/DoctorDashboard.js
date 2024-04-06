import Card2 from "../components/Card2";

function DoctorProfileHeader() {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-2">
      <div className="flex items-center">
        <button>
          <img
            src="https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg"
            alt="Doctor Avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
        </button>
        <div>
          <h1 className="text-xl font-semibold">Dr. John Doe</h1>
          <p className="text-sm text-left">General</p>
        </div>
      </div>
      <div>
        <button className="bg-red-600 text-white rounded-md px-4 py-2 ml-4">
          Logout
        </button>
      </div>
    </div>
  );
}

export default function Choose() {
  return (
    <>
      <DoctorProfileHeader />
      <div className="animate-slidein opacity-0 px-10 py-5 grid grid-cols-2 gap-4 justify-between">
        <Card2
          op="doctor"
          title={"New Reports (Pending)"}
          body={"Evaluate newly assigned reports."}
          url={
            "https://mui.com/material-ui/getting-started/templates/landing-page/"
          }
          btntext={"Evaluate"}
        />
        <Card2
          op="doctor"
          title={"Important Cases (Unevaluated)"}
          body={"View and evaluate all the cases that you marked as important."}
          url={"https://tw-elements.com/docs/standard/components/cards/"}
          btntext={"Evaluate"}
        />
        <Card2
          op="doctor"
          title={"Bookmarked Cases"}
          body={"View all the cases that you bookmarked."}
          url={"https://tw-elements.com/docs/standard/components/cards/"}
          btntext={"View"}
        />
        <Card2
          op="doctor"
          title={"All Reports"}
          body={"View all the reports (Evaluated and Unevaluated)."}
          url={"http://localhost:3000/doctor/list"}
          btntext={"View"}
        />
      </div>
    </>
  );
}
