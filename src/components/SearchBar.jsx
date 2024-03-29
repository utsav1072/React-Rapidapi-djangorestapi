import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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
        width: { xs: "100%", sm: "auto" }, // Adjust width for smaller devices
      }}
    >
      <input
        className='search-bar'
        placeholder= "Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
       style =  {{backgroundColor: 'black', color : "red"}} 
        sx={{
          width: { xs: "calc(100% - 40px)", sm: "auto" }, // Adjust width for smaller devices
          border: "none", // Remove border to make it cleaner
          outline: "none", // Remove outline
          fontSize: "inherit", // Inherit font size
          px: 1, // Add some horizontal padding
          backgroundColor: 'black', // Set background color to black
          color: 'white', // Set text color to white
          "::placeholder": { color: "red" } // Set placeholder color to red
        }}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
