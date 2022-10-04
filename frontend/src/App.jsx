import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      console.log(data);
      setBackendData(data);
    };

    const axiosData = async () => {
      const res = await Axios.get("/api");
      console.log(res.data);
      setBackendData(res.data);
    };
    axiosData();
    //fetchData();
  }, []);

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
