import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        console.log(data);
        
        if (data && data.length) {
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>FetchDataEffect</h1>
      <div>{data.length > 0 ? data?.[0]?.["title"] : "fetching...."}</div>
    </div>
  );
};

export default FetchDataEffect;
