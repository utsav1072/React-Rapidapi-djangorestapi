import React, { useEffect, useState } from 'react';
import useAxios from "../utils/useAxios";
import Loader from './Loader'
import { Box } from '@mui/material';
import { f, s, t, fo } from '../utils/constants'; // Importing image constants

const MyData = () => {
  const [profile, setProfile] = useState(null); // State to hold profile data
  const api = useAxios();
  const [image, setImage] = useState("")

  useEffect(() => {
    const fetchData = async () => {
    
      try {
        const response = await api.get("/profile/");
        setProfile(response.data); // Set profile data in state
    
      } catch (error) {
        console.log(error);
        setProfile({ fullname: "Something went wrong", bio: "" }); // Update state with error message
      }
    };
    fetchData();
  }, []);


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
    <div style={{ width: '100%', padding: '20px', backgroundColor: '#1f1f1f', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' }}>
      {profile ? ( // Conditional rendering based on profile data
        <>
          <Box sx={{ float: 'right', borderRadius: '50%', overflow: 'hidden', width: '100px', height: '100px' }}>
            <img src={getImageComponent(profile.image)} alt="Profile" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </Box>
          <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold', color: 'red' }}>Full Name:</p>
          <p style={{ marginBottom: '20px', fontSize: '24px' }}>{profile.fullname}</p>
          <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold', color: 'red' }}>Bio:</p>
          <p style={{ marginBottom: '20px', fontSize: '18px' }}>{profile.bio}</p>
        </>
      ) : (
        <Loader /> // Show loading message while fetching data
      )}
    </div>
  );
};

export default MyData;
