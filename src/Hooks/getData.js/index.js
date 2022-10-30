import Papa from "papaparse";
import { useEffect, useState } from 'react'

export const UseGetData = (csv) => {
  const [file, setFile] = useState([]);

  useEffect(() => {
    const data = csv;
    Papa.parse(data, {
      download: true,
      header: true,
      complete: function (result) {
        setFile(result.data);
      },
    });
  }, [csv]);
  return file
}
