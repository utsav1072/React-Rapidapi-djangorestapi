import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react"; // Importing useEffect and useState
import AuthContext from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import useAxios from "../utils/useAxios";

const LogoutButton = () => {
  const { logoutUser } = useContext(AuthContext);
  const api = useAxios();
  const navigate = useNavigate();
  const [res, setRes] = useState(""); // State to hold the response

  const handleLogout = () => {
    logoutUser();
    navigate("/login"); // Navigate to login page after logout
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        const { name } = response.data; // Extracting only the 'name' property from the response data
        setRes(name);
      } catch (error) {
        console.log(error);
        setRes("Something went wrong");
      }
    };
    fetchData();
  }, []);
   // Empty dependency array to run effect only once on component mount

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button variant="contained" style={{ backgroundColor: "red", marginRight: 10 }} onClick={handleLogout}>
        Logout
      </Button>
      {/* Displaying the response */}
      <div ><Link to="/dashboard" style={{ color: "white" }}>{res}</Link></div>
    </div>
  );
};

export default LogoutButton;
