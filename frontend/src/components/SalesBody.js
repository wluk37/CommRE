import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";

const SalesBody = (props) => {
  const { agents, selected, sales, onSelect } = props.props;
  return (
    <TableBody>
      {agents.map((agent) => (
        <TableRow
          key={agent}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          selected={selected === agent}
          onClick={() => {
            onSelect(agent);
          }}
        >
          <TableCell>{agent}</TableCell>
          <TableCell>{sales[agent]}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default SalesBody;
