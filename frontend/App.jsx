
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/properties")
      .then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h1>SmartEstate</h1>
      {data.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
}
