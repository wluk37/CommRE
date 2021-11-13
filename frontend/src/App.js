import "./App.css";
import SalesTable from "./components/SalesTable";
import React, { useState, useEffect, useRef } from "react";
import { fetchAgents, fetchSales, fetchTypes } from "./utils/fetcher";

function App() {
  const [salesData, setSalesData] = useState({});
  const [agentList, setAgentList] = useState([]);
  const [agentSelected, setAgentSelected] = useState("");
  const [pieData, setPieData] = useState({});

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      const getSalesData = async () => {
        setSalesData(await fetchSales());
        setAgentList(await fetchAgents());
      };
      getSalesData();
      firstRender.current = false;
    } else {
      setAgentSelected(agentList[0]);
    }
  }, [salesData, agentList]);

  useEffect(() => {
    if (agentSelected !== undefined && agentSelected !== "") {
      const getPropertyTypes = async () => {
        setPieData(await fetchTypes(agentSelected));
      };
      getPropertyTypes();
    }
  }, [agentSelected]);

  return (
    <div className="App">
      {
        <SalesTable
          agents={agentList}
          selected={agentSelected}
          sales={salesData}
          onSelect={setAgentSelected}
        />
      }
    </div>
  );
}

export default App;
