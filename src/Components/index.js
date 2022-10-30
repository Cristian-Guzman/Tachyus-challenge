import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import completions from "Data/completions.csv";

export const Home = () => {
  const [file, setFile] = useState([])
    
  useEffect(() => {
    const file = completions;
    Papa.parse(file,{ 
      download: true,
      header: true,
      complete: function(result){
        setFile(result.data)
      }  
    })
  }, [])

  return (
    <>
    {file && file?.map(data => (
      <div>
        wellName: {data.wellName}
      </div>
    ))}
    {}
    </>
  );
};
