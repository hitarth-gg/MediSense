import React, { useState, useEffect } from 'react';
import ListRow from '../components/ListRow';
import axios from 'axios';

export default function DoctorList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post('http://localhost:3000/getallforms/', {});
        setData(response.data.details.forms);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="px-20">
      {data.map((el) => (
        <ListRow
          key={el.id} // Make sure to provide a unique key for each list item
          name={el.name}
          age={el.age}
          sex={el.sex}
          presentCase={el.presentCase}
          pastHistory={el.pastHistory}
          durationOfSymptoms={el.durationOfSymptoms}
          physicalExamination={el.physicalExamination}
          remarks={el.remarks}
          status={el.status}
        />
      ))}
    </div>
  );
}
