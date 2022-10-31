import React, { useState } from "react";
import completions from "Data/completions.csv";
import production from "Data/production.csv";
import { Grid } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";
import { UseGetData } from "Hooks/getData.js";
import { LineChart } from "./LineChart";

const initialDataState = {
  skip: 0,
  take: 20,
};
export const Home = () => {
  const dataFileProduction = UseGetData(production);
  const dataFileCompletions = UseGetData(completions);
  const [pageOne, setPageOne] = useState(initialDataState);
  const [pageTwo, setPageTwo] = useState(initialDataState);
  const [search, setSearch] = useState("");
  const dataGraphOil = [];
  const dataGraphWater = [];
  const dataGraphGas = [];
  const dataGraphWaterInj = [];
  const dataGraphYear = [];

  const pageChangeOne = (event) => {
    setPageOne(event.page);
  };
  const pageChangeTwo = (event) => {
    setPageTwo(event.page);
  };

  const handleSearchData = (e) => {
    setSearch(e.target.value);
  };
  const results = !search
    ? dataFileCompletions
    : dataFileCompletions.filter((dato) =>
        dato.wellName.toLowerCase().includes(search.toLocaleLowerCase())
      );
  const addStates = () => {
    dataFileProduction.map((data) => {
      dataGraphOil.push(Number(data.Qo));
      dataGraphWater.push(Number(data.Qw));
      dataGraphGas.push(Number(data.Qg));
      dataGraphWaterInj.push(Number(data.Qs));
      dataGraphYear.push(Number(data.Year));
    });
  };

  if (dataFileProduction.length > 0) {
    addStates();
  }

  return (
    <>
      {dataFileProduction.length > 0 && dataFileProduction && (
        <Grid
          style={{
            height: "100%",
          }}
          data={dataFileProduction.slice(
            pageOne.skip,
            pageOne.take + pageOne.skip
          )}
          skip={pageOne.skip}
          take={pageOne.take}
          total={dataFileProduction.length}
          pageable={true}
          onPageChange={pageChangeOne}
        ></Grid>
      )}
      <input type="text" onChange={handleSearchData} value={search} />
      {dataFileCompletions.length > 0 && dataFileCompletions && (
        <Grid
          style={{
            height: "100%",
          }}
          data={
            results.length > 0
              ? results.slice(pageTwo.skip, pageTwo.take + pageTwo.skip)
              : dataFileCompletions.slice(
                  pageTwo.skip,
                  pageTwo.take + pageTwo.skip
                )
          }
          skip={pageTwo.skip}
          take={pageTwo.take}
          total={results.length > 0 ? results.length : dataFileCompletions.length}
          pageable={true}
          onPageChange={pageChangeTwo}
        ></Grid>
      )}
      {dataGraphOil.length > 0 && (
        <LineChart
          year={dataGraphYear}
          gas={dataGraphGas}
          oil={dataGraphOil}
          water={dataGraphWater}
          waterInj={dataGraphWaterInj}
        />
      )}
    </>
  );
};
