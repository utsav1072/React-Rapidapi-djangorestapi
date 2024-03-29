import React, { useState } from 'react';
import { Box, Typography, Stack, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { jwtDecode } from "jwt-decode";
import ProfilePage from './ProfilePage';
import { Playlist, MyData } from './';

function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("dashboard");
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const token = localStorage.getItem("authTokens");
  const username = token ? jwtDecode(token).username : "";

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Stack
      direction="column"
      style={{backgroundColor : "black"}}
      sx={{
        overflow: "hidden",
        minHeight: "calc(100vh - 64px)", // Adjusted height to accommodate navbar height (assuming navbar height is 64px)
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#000",
          color: "#fff",
          overflow: "auto",
          px: 2,
          py: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          <span style={{ color: "white" }}>Hello </span>
          <span style={{ color: "red" }}>{username}!</span>
        </Typography>
        <Stack spacing={1} sx={{ px: 2, overflow: "auto" }}>
          <Button
            onClick={() => handleCategoryClick("dashboard")}
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
            onClick={() => handleCategoryClick("updateProfile")}
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
            onClick={() => handleCategoryClick("myPlaylist")}
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
        <Typography variant="body2" sx={{ mt: 1.5 }}>
          Welcome!
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          width: "100%",
          overflowY: "auto",
          backgroundColor: "#000",
          color: "#fff",
          px: 2,
        }}
      >
        {selectedCategory === "dashboard" && (
          <Typography variant="h4" fontWeight="bold" mb={2}>
            My Dashboard <span style={{ color: "#FC1503" }}><MyData /></span>
          </Typography>
        )}
        {selectedCategory === "updateProfile" && <ProfilePage />}
        {selectedCategory === "myPlaylist" && <Playlist />}
      </Box>
    </Stack>
  );
}

export default Dashboard;
