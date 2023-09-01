import  { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "./Sidebar/Sidebar";
import Viewer from "./Viewer/Viewer";
import { getCookie } from "../../utils/getCookiesData";

const Home = () => {
  const [data, setData] = useState();

  const myCookieValue = JSON.parse(getCookie("sessionData") || "{}");

  localStorage.setItem("token", myCookieValue || "{}");

  useEffect(() => {
    // Define the headers with the authorization token
    const headers = {
      Authorization: `Bearer ${myCookieValue.public_token}`,
      "Content-Type": "application/json",
    };

    // Define the API endpoint
    const apiUrl = "https://developer.api.autodesk.com/project/v1/hubs";

    
    

    // Make the API call with the headers
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        // Handle the response
        setData(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Sidebar />
      <div
        style={{
          width: "75%",
          height: "92vh",
          right: 0,
          top: "3em",
          bottom: 0,
          border: "1px solid #3f3f3f",
        }}
      >
        <Viewer />
      </div>
    </div>
  );
};

export default Home;
