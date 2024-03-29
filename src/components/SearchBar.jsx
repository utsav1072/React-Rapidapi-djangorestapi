import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, IconButton, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const isSmallDevice = useMediaQuery('(max-width:600px)');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        backgroundColor: 'black', // Set background color to black
        color: 'white', // Set text color to white
        mr: { xs: 0, sm: 5 }, // Adjust margin for smaller devices
        mb: { xs: 2, sm: 0 }, // Adjust margin for smaller devices
        width: { xs: "100%", sm: isSmallDevice ? "30%" : "auto" }, // Adjust width for smaller devices
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <input
        className='search-bar'
        placeholder= "Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ backgroundColor: 'black', color: "red", width: "100%", border: 'none', outline: 'none', padding: '10px' }}
      />
      <IconButton type='submit' sx={{ color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
