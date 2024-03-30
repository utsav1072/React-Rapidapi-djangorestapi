import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react"; // Importing useEffect and useState
import AuthContext from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import useAxios from "../utils/useAxios";
import { f, s, t, fo } from '../utils/constants'; // Importing image constants
import {Box} from '@mui/material'

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
        const response = await api.get("/profile/");
        const { image } = response.data; // Extracting only the 'name' property from the response data
        setRes(image);
      } catch (error) {
        console.log(error);
        setRes("Something went wrong");
      }
    };
    fetchData();
  });

   const getImageComponent = (imageName) => {
    switch (imageName) {
      case 'f':
        return f;
      case 's':
        return s;
      case 't':
        return t;
      case 'fo':
        return fo;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button variant="contained" style={{ backgroundColor: "red", marginRight: 10 }} onClick={handleLogout}>
        Logout
      </Button>
      {/* Displaying the response */}
      <div ><Link to="/dashboard" style={{ color: "white" }}>
      <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: '40px', height: '40px' }}>
            <img src={getImageComponent(res)} alt="Profile" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </Box>
        
        </Link></div>
    </div>
  );
};

export default LogoutButton;
