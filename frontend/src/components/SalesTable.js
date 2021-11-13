import React from "react";
import { Table, TableContainer, Paper } from "@mui/material";
import SalesHeader from "./SalesHeader";
import SalesBody from "./SalesBody";

const SalesTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <SalesHeader />
        <SalesBody props={props} />
      </Table>
    </TableContainer>
  );
};

export default SalesTable;
