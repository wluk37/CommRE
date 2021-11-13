import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const SalesHeader = () => {
  const tableHeader = ["Agent", "Sales"];
  return (
    <TableHead>
      <TableRow>
        {tableHeader.map((ele, i) => (
          <TableCell align="left" key={"cell" + i}>
            {ele}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default SalesHeader;
