export const fetchAgents = async () => {
  try {
    const agents = await fetch("http://localhost:8080/agents", {
      method: "GET",
    });
    return agents.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchSales = async () => {
  try {
    const sales = await fetch("http://localhost:8080/property-sales", {
      method: "GET",
    });
    return sales.json();
  } catch (error) {
    console.error(error);
  }
};

export const fetchTypes = async (agent) => {
  try {
    const types = await fetch(`http://localhost:8080/property-types/${agent}`, {
      method: "GET",
    });
    return types.json();
  } catch (error) {
    console.error(error);
  }
};
