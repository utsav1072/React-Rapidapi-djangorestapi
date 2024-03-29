import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed, Loginpage, Registrationpage, Dashboard } from './components';
import PrivateRoute from './utils/PrivateRoute';
import './index.css'; 


const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' , height : {xs : "100vh"} }}>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Registrationpage />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
            <Route path="/" element={<Feed />} />
          </Routes>
        </AuthProvider>
      </Box>
    </BrowserRouter>
  );
};

export default App;
