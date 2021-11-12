const express = require("express");
const csvData = require("./helpers/csvParser");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("CommRE Analytics");
  res.send(csvData);
});

app.get("/agents", (req, res) => {
  // sends a list of unique agents
  const agents = [];
  csvData.forEach((entry) => {
    let agent = entry.agent;
    if (!agents.includes(agent)) {
      agents.push(agent);
    }
  });
  res.send(agents);
});

app.get("/property-types", (req, res) => {
  // sends a list of all properties sold by agent
  res.send("Hello World!");
});

app.get("/property-sales/:agent", (req, res) => {
  // sends the total number of sales done by each agent
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`CommRE Analytics listening at http://localhost:${port}`);
});
