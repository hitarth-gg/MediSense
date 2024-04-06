import Card2 from "../components/Card2";

export default function Choose() {
  return (
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
  );
}
