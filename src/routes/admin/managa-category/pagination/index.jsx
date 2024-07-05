import { Box, Pagination } from "@mui/material";
import React from "react";

const PaginationComponent = ({ page, setPage, paginationCount }) => {
  const handleChange = (event, value) => {
    setPage(value);
    sessionStorage.setItem("page-count", value);
  };
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <Pagination
          count={paginationCount}
          color="standard"
          page={page}
          onChange={handleChange}
        />
      </Box>
    </>
  );
};

export default PaginationComponent;
