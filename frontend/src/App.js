import "./App.css";
import SalesTable from "./components/SalesTable";
import React, { useState, useEffect } from "react";
import PieChart from "./components/PieChart";
import { fetchAgents, fetchSales, fetchTypes } from "./utils/fetcher";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function App() {
  const [salesData, setSalesData] = useState({});
  const [agentList, setAgentList] = useState([]);
  const [agentSelected, setAgentSelected] = useState("");
  const [pieData, setPieData] = useState([]);

  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up("sm"))
    ? "row"
    : "column";
  const fontSize = useMediaQuery(theme.breakpoints.up("sm")) ? "2vw" : "7vw";

  // fetches agent and sales data from server on initial component mount
  useEffect(() => {
    const getSalesData = async () => {
      setSalesData(await fetchSales());
      setAgentList(await fetchAgents());
    };
    getSalesData();
  }, []);

  // sets the agent being selected when agent list changes
  useEffect(() => {
    setAgentSelected(agentList[0]);
  }, [agentList]);

  // renders pie chart only when an agent has been selected
  useEffect(() => {
    if (agentSelected !== undefined && agentSelected !== "") {
      const getPropertyTypes = async () => {
        const propertyTypes = await fetchTypes(agentSelected);
        const result = [];
        for (const [key, value] of Object.entries(propertyTypes)) {
          result.push([key, value]);
        }
        setPieData(result);
      };
      getPropertyTypes();
    }
  }, [agentSelected]);

  return (
    <div className="App">
      <h1 style={{ fontSize: fontSize }}>Data Analysis for CommRE</h1>
      <div className="Wrapper" style={{ flexDirection: screenSize }}>
        <div className="TableWrapper">
          {
            <SalesTable
              agents={agentList}
              selected={agentSelected}
              sales={salesData}
              onSelect={setAgentSelected}
            />
          }
        </div>
        {<PieChart propertyTypes={pieData} agent={agentSelected} />}
      </div>
    </div>
  );
}

export default App;
