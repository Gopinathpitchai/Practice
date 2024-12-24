import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const apicall = async () => {
  //     const response = await fetch('https://freetestapi.com/api/v1/movies');
  //     const result = await response.json();
  //     setData(result);
  //   };

  //   apicall();
  // }, []);

  return (
    <div>
      <h1>MOVIE TABLE</h1>
      {data ? <Movie data={data} /> : <p>Loading...</p>}
    </div>
  );
};

export default DataFetcher;
