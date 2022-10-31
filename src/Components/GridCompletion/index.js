import { Grid } from "@progress/kendo-react-grid";
import { Search } from "Components/Search";
import React, { useState } from "react";
import { GridWrapperSC, TitleSC } from "./styles";

const initialDataState = {
  skip: 0,
  take: 20,
};

export const GridCompletion = ({ dataFileCompletions }) => {
  const [pageTwo, setPageTwo] = useState(initialDataState);
  const [search, setSearch] = useState("");

  const results = !search
    ? dataFileCompletions
    : dataFileCompletions.filter((dato) =>
        dato.wellName.toLowerCase().includes(search.toLocaleLowerCase())
      );

  const pageChangeTwo = (event) => {
    setPageTwo(event.page);
  };

  const handleSearchData = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <GridWrapperSC>
        <TitleSC>Completions Grid</TitleSC>
        <Search handleSearchData={handleSearchData} search={search} />
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
            total={
              results.length > 0 ? results.length : dataFileCompletions.length
            }
            pageable={true}
            onPageChange={pageChangeTwo}
          />
        )}
      </GridWrapperSC>
    </>
  );
};
