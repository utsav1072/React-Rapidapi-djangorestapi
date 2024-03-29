import React, { useState } from 'react';
import { Box, Typography, Stack, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { jwtDecode } from "jwt-decode";
import ProfilePage from './ProfilePage';
import { Playlist, MyData } from './'

function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("dashboard");
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const token = localStorage.getItem("authTokens");
  const username = token ? jwtDecode(token).username : "";

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{
        overflow: "hidden",
        height: { xs: "auto", md: "92vh" },
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          height: { xs: "20vh", md: "90vh" },
          width: { xs: "100%", md: "20%" },
          borderRight: { xs: 0, md: "1px solid #3d3d3d" },
          backgroundColor: "#000",
          color: "#fff",
          overflow : "auto",
          px: { xs: 2, md: 0 },
          py: { xs: 2, md: 0 },
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, px: 2 }}>
          <span style={{ color: "white" }}>Hello </span>
          <span style={{ color: "red" }}>{username}!</span>
        </Typography>
        <Stack  spacing={1} sx={{ flexDirection: {xs:"row" , md:"column"}, px: 2 , overflow : "auto"}}>
          <Button
            onClick={() => setSelectedCategory("dashboard")}
            sx={{
              color: "white",
              bgcolor: selectedCategory === "dashboard" ? "red" : "transparent",
              minWidth: "120px",
              py: '10px',
            }}
            className='category-btn'
          >
            My Dashboard
          </Button>
          <Button
            onClick={() => setSelectedCategory("updateProfile")}
            sx={{
              color: "white",
              bgcolor: selectedCategory === "updateProfile" ? "red" : "transparent",
              minWidth: "120px",
              py: '10px',
            }}
            className='category-btn'
          >
            Update Profile
          </Button>
          <Button
            onClick={() => setSelectedCategory("myPlaylist")}
            sx={{
              color: "white",
              bgcolor: selectedCategory === "myPlaylist" ? "red" : "transparent",
              minWidth: "120px",
              py: '10px',
            }}
            className='category-btn'
          >
            Your Playlist
          </Button>
        </Stack>
        <Typography variant="body2" sx={{ mt: 1.5, ml: 2 }}>
          Welcome!
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
          overflowY: "auto",
          maxHeight: "90vh",
          backgroundColor: "#000",
          color: "#fff",
          px: 2,
        }}
      >
        {selectedCategory === "dashboard" && (
          <Typography variant="h4" fontWeight="bold" mb={2}>
            My Dashboard <span style={{ color: "#FC1503" }}><MyData/></span>
          </Typography>
        )}
        {selectedCategory === "updateProfile" && <ProfilePage />}
        {selectedCategory === "myPlaylist" && <Playlist />}
      </Box>
    </Stack>
  );
}

export default Dashboard;
