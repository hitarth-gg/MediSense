import Table from "../components/Table";

export default function PatientTable({ response }) {
    console.log(response);
    
  return (
    <div>
      {response.map((el) => {
        <Table response={response} />;
      })}
    </div>
  );
}
