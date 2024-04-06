import Card2 from "../components/Card2";

export default function Choose() {
  return (
    <div className="animate-slidein opacity-0 px-10 py-5 grid grid-cols-2 gap-4 justify-between">
      <Card2
        op="facilitator"
        title={"General Cases"}
        body={
          "For minor cases like cough, cold, etc. Enter symptoms and proceed."
        }
        url={"/facilitator/filldetails/1"}
      />
      <Card2
        op="facilitator"
        title={"Brain Tumor (AI Powered detection)"}
        body={
          "For brain tumor specific cases. Enter symptoms, upload images and proceed."
        }
        url={"/facilitator/filldetails/2"}
      />
      <Card2
        op="facilitator"
        title={"Lung Diseases (AI Powered detection)"}
        body={
          "For lung disease specific cases. Enter symptoms, upload images and proceed."
        }
        url={"/facilitator/filldetails/1"}
      />
      <Card2
        op="facilitator"
        title={"Breast cancer (AI Powered detection)"}
        body={
          "For breast cancer specific cases. Enter symptoms, upload images and proceed."
        }
        url={"/facilitator/filldetails/2"}
      />
      
    </div>
  );
}
