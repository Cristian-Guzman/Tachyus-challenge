import React from "react";
import completions from "Data/completions.csv";
import production from "Data/production.csv";
import "@progress/kendo-theme-default/dist/all.css";
import { UseGetData } from "Hooks/getData.js";
import { useParams } from "react-router-dom";
import { GridCompletion } from "./GridCompletion";
import { GridProduction } from "./GridProduction";

export const Home = () => {
  const dataFileProduction = UseGetData(production);
  const dataFileCompletions = UseGetData(completions);
  const { type } = useParams();

  return (
    <>
      {type === 'completions' && (
        <GridCompletion dataFileCompletions={dataFileCompletions} />
      )}
      { type === 'production' && (
        <GridProduction dataFileProduction={dataFileProduction} />
      )}
    </>
  );
};
