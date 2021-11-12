const express = require("express");
const csvData = require("./helpers/csvParser");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("CommRE Analytics");
  res.send(csvData);
});

// sends a list of unique agents
app.get("/agents", (req, res) => {
  const agents = [];
  csvData.forEach((entry) => {
    let agent = entry.agent;
    if (!agents.includes(agent)) {
      agents.push(agent);
    }
  });
  res.send(agents);
});

// sends the number of properties sold by property type for an agent
app.get("/property-types/:agent", (req, res) => {
  let propertyTypes = {};
  const { agent } = req.params;

  // filters csvData to only contain entries of [agent]
  let filteredData = csvData.filter((entry) => {
    if (entry.agent === agent) {
      return entry;
    }
  });

  // counts the number of sales in each property type
  filteredData.forEach((entry) => {
    const type = entry["property-type"];
    if (propertyTypes[type] === undefined) {
      propertyTypes[type] = 1;
    } else {
      propertyTypes[type]++;
    }
  });

  res.send(propertyTypes);
});

// sends the total number of sales done by each agent
app.get("/property-sales", (req, res) => {
  let propertySales = {};

  csvData.forEach((entry) => {
    const { agent } = entry;
    if (propertySales[agent] === undefined) {
      propertySales[agent] = 1;
    } else {
      propertySales[agent]++;
    }
  });

  res.send(propertySales);
});

app.listen(port, () => {
  console.log(`CommRE Analytics listening at http://localhost:${port}`);
});
