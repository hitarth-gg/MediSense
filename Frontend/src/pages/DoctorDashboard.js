import Card2 from "../components/Card2";

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
            "http://localhost:3001/list"
          }
          btntext={"Evaluate"}
        />
        <Card2
          op="doctor"
          title={"Important Cases (Unevaluated)"}
          body={"View and evaluate all the cases that you marked as important."}
          url={"http://localhost:3001/list"}
          btntext={"Evaluate"}
        />
        <Card2
          op="doctor"
          title={"Bookmarked Cases"}
          body={"View all the cases that you bookmarked."}
          url={"http://localhost:3001/list"}
          btntext={"View"}
        />
        <Card2
          op="doctor"
          title={"All Reports"}
          body={"View all the reports (Evaluated and Unevaluated)."}
          url={"http://localhost:3001/list"}
          btntext={"View"}
        />
      </div>
    </>
  );
}
