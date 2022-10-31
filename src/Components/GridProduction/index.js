import { Grid } from "@progress/kendo-react-grid";
import { LineChart } from "Components/LineChart";
import React, { useState } from "react";

const initialDataState = {
  skip: 0,
  take: 20,
};

export const GridProduction = ({ dataFileProduction }) => {
  const [pageOne, setPageOne] = useState(initialDataState);
  const dataGraphOil = [];
  const dataGraphWater = [];
  const dataGraphGas = [];
  const dataGraphWaterInj = [];
  const dataGraphYear = [];

  const pageChangeOne = (event) => {
    setPageOne(event.page);
  };

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
