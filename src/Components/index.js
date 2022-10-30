import React, { useState } from "react";
import Papa from "papaparse";
import completions from "Data/completions.csv";

export const Home = () => {
    let file = completions;
      Papa.parse(file,{ 
        download: true,
        complete: function(result){
            console.log(result.data)
        }
        
    })

  return (
    <>
    </>
  );
};
