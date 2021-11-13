import React from "react";
import { Table, TableContainer, Paper } from "@mui/material";
import SalesHeader from "./SalesHeader";
import SalesBody from "./SalesBody";

const SalesTable = (props) => {
  return (
    <TableContainer sx={{ minWidth: 300, maxWidth: 300 }} component={Paper}>
      <Table>
        <SalesHeader />
        <SalesBody props={props} />
      </Table>
    </TableContainer>
  );
};

export default SalesTable;
