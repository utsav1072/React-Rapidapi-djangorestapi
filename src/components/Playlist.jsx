import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { VideoC } from "./";
import useAxios from "../utils/useAxios";
import Loader from './Loader';

const Playlist = () => {
  const [videos, setVideos] = useState([]);
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(true); // State to manage loading state
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        const { userId } = response.data;
        setRes(userId);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchVideoIds = async () => {
      try {
        if (!res) return;
  
        const response = await api.get(`/videos/${res}/`);
        const videoIds = response.data?.videos || [];
        const videoDetails = await Promise.all(videoIds.map(fetchVideoDetails));
        setVideos(videoDetails.filter(video => video !== null));
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading to false in case of error
      }
    };
  
    fetchVideoIds();
  }, [res]);

  const fetchVideoDetails = async videoId => {
    try {
      const snippetResponse = await fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`);
      const videoSnippets = snippetResponse.items || [];
      if (videoSnippets.length > 0) {
        return {
          id: videoId,
          snippets: videoSnippets[0]
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      return null;
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "80%" },
        overflowY: "auto",
        maxHeight: "90vh",
      }}
    >
      <Box p={2}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          <span style={{ color: "#FC1503" }}>Playlist</span>
        </Typography>
        {loading ? (
          <Loader /> // Show loader when loading is true
        ) : (
          <Stack
            direction={"row"}
            flexWrap="wrap"
            justifyContent="start"
            alignItems="start"
            gap={2}
          >
            {videos.map((video, idx) => (
              <Box key={idx}>
                <VideoC video={video} />
              </Box>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default Playlist;
