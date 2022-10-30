import React from "react";
import completions from "Data/completions.csv";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';
import { UseGetData } from "Hooks/getData.js";


export const Home = () => {
  
  const dataFile = UseGetData(completions)
  return (
    <>
        <Grid
      style={{
        height: "100%"
      }}
      data={dataFile}
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
