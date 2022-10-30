import Papa from "papaparse";
import { useEffect, useState } from 'react'

export const UseGetData = (csv, ) => {
  const [file, setFile] = useState([]);

  const sortedProducts = data => {
    return data.sort(
    (p1, p2) => (p1.Year > p2.Year) ? 1 : (p1.Year < p2.Year) ? -1 : 0); 
  }

  useEffect(() => {
    const data = csv;
    Papa.parse(data, {
      download: true,
      header: true,
      complete: function (result) {
        setFile(sortedProducts(result.data))
      },
    });
  }, [csv]);
  return file
}
