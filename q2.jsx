import React, { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {data.slice(0, 10).map((item) => (
        <div key={item.id} style={{border: "1px solid #ccc", margin: "10px", padding: "10px"}}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchData;

import React from "react";
import FetchData from "./FetchData";

function App() {
  return (
    <div>
      <FetchData />
    </div>
  );
}

export default App;

import axios from "axios";

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      setData(res.data);
      setLoading(false);
    });
}, []);