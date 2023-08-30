import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
const DashboardHome = () => {
  const [data, setData] = useState();

  console.log(data,"token");
  
  useEffect(() => {
    // Define the API endpoint
    const apiUrl = "http://localhost:8080/api/auth/token";

    // Make the API call with the headers
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the response
        setData(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }, []);

  return <div>DashboardHome</div>;
};

export default DashboardHome;
