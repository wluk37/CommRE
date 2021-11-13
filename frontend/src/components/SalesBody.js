import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";

const SalesBody = (props) => {
  const { agents, selected, sales, onSelect } = props.props;
  return (
    <TableBody>
      {agents.map((agent) => (
        <TableRow
          key={agent}
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
