import ListRow from "../components/ListRow";
import axios from "axios";

export default function DoctorList() {
  let data=[];
  async function handleSubmit () {
    try {
      data = await axios.post("http://localhost:3000/getallforms/", {});
      data=data.data.details.forms;
      // console.log(data);   
    } catch (err) {
      console.log(err);
    }
  };
  handleSubmit();
  return (
    <div className="px-20">
        {data}
        
      {/* <ListRow
        name={"Dev Darshan"}
        age={19}
        sex={"male"}
        presentCase={"Palpitations, Asdas, Asdasd"}
        pastHistory={"Random sh go brr"}
        durationOfSymptoms={"2 Weeks"}
        physicalExamination={"bruh"}
        remarks={"hello"}
        status={"Active"}
      /> */}
      {/* <ListRow /> */}
      {/* <ListRow /> */}
      {/* <ListRow /> */}
    </div>
  );
}
