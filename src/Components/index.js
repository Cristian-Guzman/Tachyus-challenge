import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import completions from "Data/completions.csv";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';


export const Home = () => {
  const [file, setFile] = useState([]);

  useEffect(() => {
    const file = completions;
    Papa.parse(file, {
      download: true,
      header: true,
      complete: function (result) {
        setFile(result.data);
      },
    });
  }, []);
  useEffect(() => {
    console.log(file)
  }, [file])

  return (
    <>
        <Grid
      style={{
        height: "100%"
      }}
      data={file}
    >
      <GridColumn field="TD" title="TD" />
      <GridColumn field="Type" title="Type" />
      <GridColumn field="X" title="X"/>
      <GridColumn field="Y" title="Y"/>
      <GridColumn field="boreId" title="boreId" />
      <GridColumn field="compSubId" title="compSubId" />
      <GridColumn field="compartment" title="compartment"/>
      <GridColumn field="faultBlock" title="faultBlock"/>
      <GridColumn field="isHorizontal" title="isHorizontal"/>
      <GridColumn field="lat" title="lat"/>
      <GridColumn field="long" title="long"/>
      <GridColumn field="maxBHP" title="maxBHP"/>
      <GridColumn field="reservoir" title="reservoir"/>
      <GridColumn field="wellAPI" title="wellAPI"/>
      <GridColumn field="wellName" title="wellName"/>
    </Grid>
    </>
  );
};
