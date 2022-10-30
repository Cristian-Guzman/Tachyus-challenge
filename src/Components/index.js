import React, { useEffect, useState } from "react";
import completions from "Data/completions.csv";
import production from "Data/production.csv";
import { uid } from 'uid';
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';
import { UseGetData } from "Hooks/getData.js";
import { LineChart } from "./LineChart";


const initialDataState = {
  skip: 0,
  take: 20,
};
export const Home = () => {
  const [pageOne, setPageOne] = useState(initialDataState);
  const [pageTwo, setPageTwo] = useState(initialDataState);
  let dataGraphOil = []
  let dataGraphWater = []
  let dataGraphGas = []
  let dataGraphWaterInj = []
  let dataGraphYear = []

  const pageChangeOne = (event) => {
    setPageOne(event.page);
  };
  const pageChangeTwo = (event) => {
    setPageTwo(event.page);
  };
  
  const addStates = () => {
    dataFileProduction.map(data => {
      dataGraphOil.push(Number(data.Qo))
      dataGraphWater.push(Number(data.Qw))
      dataGraphGas.push(Number(data.Qg))
      dataGraphWaterInj.push(Number(data.Qs))
      dataGraphYear.push(Number(data.Year))
      })
  } 

  const dataFileProduction = UseGetData(production)
  const dataFileCompletions = UseGetData(completions)
  if (dataFileProduction.length > 0){
    addStates()
  }

  
  return (
    <>
    {dataFileProduction.length > 0 && dataFileProduction &&
        <Grid
        style={{
          height: "100%"
        }}
        data={dataFileProduction.slice(pageOne.skip, pageOne.take + pageOne.skip)}
        skip={pageOne.skip}
        take={pageOne.take}
        total={dataFileProduction.length}
        pageable={true}
        onPageChange={pageChangeOne}
        >
      {Object.keys(dataFileProduction[0]).map(e => (
        <GridColumn key={uid()} field={e} title={e}/>
        ))}
    </Grid>
      }
    {dataFileCompletions.length > 0 && dataFileCompletions &&
        <Grid
        style={{
          height: "100%"
        }}
        data={dataFileCompletions.slice(pageTwo.skip, pageTwo.take + pageTwo.skip)}
        skip={pageTwo.skip}
        take={pageTwo.take}
        total={dataFileCompletions.length}
        pageable={true}
        onPageChange={pageChangeTwo}
        >
      {Object.keys(dataFileCompletions[0]).map(e => (
        <GridColumn key={uid()} field={e} title={e}/>
        ))}
    </Grid>
      }
      {
        dataGraphOil.length > 0 &&
        <LineChart year={dataGraphYear} gas={dataGraphGas} oil={dataGraphOil} water={dataGraphWater} waterInj={dataGraphWaterInj}/>
      }
    </>
  );
};
