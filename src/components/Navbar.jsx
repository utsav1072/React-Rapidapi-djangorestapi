import React, { useState, useEffect, useContext } from 'react';
import { Stack, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import LogoutButton from "./LogoutButton"; // Import the LogoutButton component
import LoginButton from "./LoginButton"; // Import the LoginButton component
import AuthContext from "../context/AuthContext";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user } = useContext(AuthContext); // Access user from AuthContext

  useEffect(() => {
    setIsAuthenticated(user ? true : false);
  }, [user]); // Re-run effect when user value changes

  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "top", background: '#000', top: 0, justifyContent: "space-between" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
        <SearchBar />
        <Stack direction="row" spacing={2} alignItems="center">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Stack>
      </Stack>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: 'flex', sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
    </Stack>
  );
};

export default Navbar;
