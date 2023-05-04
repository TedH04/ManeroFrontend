import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchDataFromAPI = async () => {
      const response = await fetch(
        "https://manerog4webappbackend.azurewebsites.net/Api/User/SignUp"
      );
      const data = await response.json();
      setData(data);
    };

    fetchDataFromAPI();
  }, []);
}
export default FetchData;
