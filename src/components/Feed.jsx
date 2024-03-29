import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromApi";

import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  console.log(videos)
  return (
    <Stack direction={{ xs: "column", md: "row" }} sx={{ height: "92vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: "100%", md: "20%" },
          borderRight: { xs: 0, md: "1px solid #3d3d3d" },
          backgroundColor: "#000",
          color: "#fff",
          overflowY: "auto", // Set overflow to auto for sidebar
          px: { xs: 2, md: 0 },
          py: { xs: 2, md: 0 },
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography variant="body2" sx={{ mt: 1.5, ml: 2, color: "white" }}>
          Welcome!
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
          overflowY: "auto", // Set overflow to auto for main content
          height: { xs: "69vh" , md: "90vh"} // Limit max height to prevent excessive scrolling
        }}
      >
        <Box p={2}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
            {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;
